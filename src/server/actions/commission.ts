"use server";

import { db } from "@/lib/db";
import { CommissionRequestSchema, CommissionInput } from "@/lib/validations";

export interface CommissionActionResult {
  success: boolean;
  message?: string;
  requestId?: string;
  errors?: Record<string, string>;
}

export async function submitCommissionRequest(
  formData: FormData
): Promise<CommissionActionResult> {
  try {
    const rawData = {
      name: formData.get("name")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      workType: formData.get("workType")?.toString() || "",
      material: formData.get("material")?.toString() || "",
      requestedText: formData.get("requestedText")?.toString() || "",
      dimensions: formData.get("dimensions")?.toString() || "",
      quantity: Number(formData.get("quantity")) || 1,
      budget: formData.get("budget")?.toString() || "",
      deadline: formData.get("deadline")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      attachments: formData.get("attachments")?.toString() || "[]",
    };

    // Honeypot spam check (if website field filled by bot)
    const honeypot = formData.get("website_verify")?.toString();
    if (honeypot) {
      // Silently accept without saving
      return { success: true, message: "تم استلام طلبك بنجاح." };
    }

    const validationResult = CommissionRequestSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      return { success: false, errors };
    }

    const valid = validationResult.data;

    const request = await db.commissionRequest.create({
      data: {
        name: valid.name.trim(),
        phone: valid.phone.trim(),
        email: valid.email?.trim() || null,
        workType: valid.workType.trim(),
        material: valid.material.trim(),
        requestedText: valid.requestedText.trim(),
        dimensions: valid.dimensions?.trim() || null,
        quantity: valid.quantity || 1,
        budget: valid.budget?.trim() || null,
        deadline: valid.deadline?.trim() || null,
        message: valid.message?.trim() || null,
        attachments: valid.attachments,
        status: "new",
      },
    });

    return {
      success: true,
      message: "شكراً لك. وصلت فكرتك إلى الاستوديو. سيتم مراجعة الطلب والتواصل معك.",
      requestId: request.id,
    };
  } catch (error) {
    console.error("Commission submission error:", error);
    return {
      success: false,
      message: "حدث خطأ غير متوقع أثناء إرسال الطلب. يرجى المحاولة لاحقاً أو مراسلتنا مباشرة.",
    };
  }
}
