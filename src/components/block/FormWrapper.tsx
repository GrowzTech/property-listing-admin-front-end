import React from "react";

const FormWrapper = ({
  title,
  color,
  description,
  icon,
  children,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex pb-7 flex-col gap-6 bg-white w-full border border-[#E2E8F0] rounded-md h-full">
      <div className={`p-6 ${color} rounded-md flex flex-col gap-4`}>
        <div className="flex gap-2 items-center">
          {icon}
          <span className="font-bold leading-0 text-[20px] text-[#333C4C]">
            {title}
          </span>
        </div>
        <span className="font-medium leading-0 text-[12px] text-[#6B7280]">
          {description}
        </span>
      </div>
      {children}
    </div>
  );
};

export default FormWrapper;
