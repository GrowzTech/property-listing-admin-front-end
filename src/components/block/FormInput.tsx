import React from "react";
import { Input } from "../ui/input";
import { HTMLInputTypeAttribute } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  errorMessage?: string;
  isRequired?: boolean;
  type?: HTMLInputTypeAttribute;
}

const TextInput = ({
  isRequired,
  errorMessage,
  label,
  className,
  type,
  ...props
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {label && (
        <label
          className={`block text-[12px] text-[#333C4C] font-medium ${className}`}
        >
          {label} {isRequired && <span className="text-[#333C4C]">*</span>}
        </label>
      )}
      <div className="w-full">
        <Input
          type={type}
          className={`mt-1 placeholder-[#9eabbf] placeholder:text-[16px] px-3 py-2 ${className}`}
          {...props}
        />
        {errorMessage && (
          <p className="text-red-500 text-[12px] mt-1">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default TextInput;
