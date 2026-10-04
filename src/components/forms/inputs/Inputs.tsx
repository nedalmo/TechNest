import React, { useState } from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { RiLockPasswordFill } from "react-icons/ri";

type TinputProsps<Tgenrc extends FieldValues> = {
  name: Path<Tgenrc>;
  type: string;
  register: UseFormRegister<Tgenrc>;
  label: string;
  error?: string;
  succses?: string;
  formText?: string;
  onBluer?: (e: React.FocusEvent<HTMLInputElement>) => void;
  idintfer?: "password" | "text";
  disabled?: boolean;
};

export default function Inputs<Tgenrc extends FieldValues>({
  name,
  type,
  succses,
  register,
  label,
  error,
  onBluer,
  formText,
  idintfer,
  disabled,
}: TinputProsps<Tgenrc>) {
  const onBluerHandeler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBluer) {
      onBluer(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };

  const [passw, setPassw] = useState("password");
  return (
    <div className="flex  flex-col w-full">
      <label htmlFor="firstName"> {label}</label>
      <div className=" relative">
        <input
          disabled={disabled}
          type={idintfer === "password" ? passw : type}
          id="firstName"
          {...register(name)}
          onBlur={onBluerHandeler}
          className={`w-full border focus:shadow-md transition-all duration-200 px-5 focus:shadow-orange-600 border-orange-500 py-2.5 mt-1 focus:border focus:border-orange-500 focus:outline-none rounded-xl ${
            error
              ? "border-red-500 focus:border-red-500 focus:shadow-red-600"
              : ""
          }`}
        />
        {idintfer === "password" && (
          <span
            onClick={() => {
              passw === "password" ? setPassw("text") : setPassw("password");
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-orange-600"
          >
            <RiLockPasswordFill />
          </span>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {formText && <p>{formText}</p>}
      {succses && <p className=" text-green-500">{succses}</p>}
    </div>
  );
}
