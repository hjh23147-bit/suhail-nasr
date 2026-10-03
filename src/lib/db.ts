import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function getPrismaClient(): PrismaClient {
  let datasourceUrl: string | undefined = undefined;

  // On Vercel serverless functions, SQLite needs to run in /tmp or read-only
  if (process.env.VERCEL) {
    const tmpDb = "/tmp/dev.db";
    const bundledDb = path.join(process.cwd(), "prisma", "dev.db");

    try {
      if (!fs.existsSync(tmpDb) && fs.existsSync(bundledDb)) {
        fs.copyFileSync(bundledDb, tmpDb);
      }
      if (fs.existsSync(tmpDb)) {
        datasourceUrl = `file:${tmpDb}`;
      } else if (fs.existsSync(bundledDb)) {
        datasourceUrl = `file:${bundledDb}`;
      }
    } catch (e) {
      console.warn("Could not copy sqlite db to /tmp:", e);
    }
  }

  const client = new PrismaClient({
    ...(datasourceUrl ? { datasourceUrl } : {}),
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

  return client;
}

export const db = globalForPrisma.prisma ?? getPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
