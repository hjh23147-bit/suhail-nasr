import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format numbers with Eastern Arabic digits or Western Arabic digits gracefully.
 */
export function formatYear(year?: number | null): string {
  if (!year) return "";
  return year.toString();
}

/**
 * Safe truncate for editorial excerpts.
 */
export function truncate(text: string, length = 120): string {
  if (!text || text.length <= length) return text;
  return text.slice(0, length).trim() + "…";
}
