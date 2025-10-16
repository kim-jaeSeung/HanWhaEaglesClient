import type React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
}

function Input({
  type,
  placeholder,
  className,
  autoComplete,
  onChange,
  register,
  errorMessage,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
        {...register}
        onChange={(e) => {
          register?.onChange?.(e);
          onChange?.(e);
        }}
      />
      {errorMessage && (
        <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
