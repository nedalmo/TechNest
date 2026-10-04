import z from "zod";

const signInValidation = z
  .object({

    email: z.string().trim().min(1, { message: "البريد الإلكتروني مطلوب" }).email({ message: "البريد الإلكتروني غير صحيح" }),

    password: z.string().min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل" })
  });


    type TformData = z.infer<typeof signInValidation>;


    export {signInValidation, type TformData}