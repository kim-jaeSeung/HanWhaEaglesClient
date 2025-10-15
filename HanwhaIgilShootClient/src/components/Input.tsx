import React from "react";

export interface InputProps {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ type, placeholder, className, autoComplete }: InputProps) {
  return (
    <>
      {/* <input type="text" /> */}
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
      />
    </>
  );
}

export default Input;
