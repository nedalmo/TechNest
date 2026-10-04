import z from "zod";

const signUpValidation = z
  .object({
    firstName: z.string().trim().min(1, { message: "الاسم الأول مطلوب" }),

    lastName: z.string().trim().min(1, { message: "اسم العائلة مطلوب" }),

    email: z
      .string()
      .trim()
      .min(1, { message: "البريد الإلكتروني مطلوب" })
      .email({ message: "البريد الإلكتروني غير صحيح" }),

    password: z
      .string()
      .min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل" })
      .regex(/[!@#$%^&*()_+{}|[\]\\:";'<>?,./]/, {
        message: "كلمة المرور يجب أن تحتوي على رمز خاص",
      }),

    confirmPassword: z.string().min(1, { message: "تأكيد كلمة المرور مطلوب" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["confirmPassword"],
  });


    type TformData = z.infer<typeof signUpValidation>;


    export {signUpValidation, type TformData}