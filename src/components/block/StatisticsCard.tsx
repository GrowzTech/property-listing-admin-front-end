import React from "react";

const StatisticsCard = ({
  color,
  bgColor,
  title,
  value,
  Icon,
  description,
  currency = "",
  isDefault = false,
}: {
  bgColor: string;
  color: string;
  title: string;
  value: string | number;
  Icon: React.ElementType;
  description: string;
  currency?: string;
  isDefault?: boolean;
}) => {
  return (
    <div
      className={`flex-1 flex flex-col justify-between  ${
        isDefault ? "bg-white" : bgColor
      } rounded-lg p-4 text-black min-h-[130px] shadow relative`}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#374151]">{title}</span>
        <div
          className={`flex justify-center items-center rounded-md p-1.5 ${color}`}
        >
          <Icon color={isDefault ? "black " : "#fff"} size={16} />
        </div>
      </div>
      <span className="font-bold text-[24px]">
        {currency}
        {value}
      </span>
      <span className="text-[#94A3B8] text-[12px]">{description}</span>
      <div className="absolute font-normal bottom-1 right-1 z-50">
        {!isDefault && <Icon color={"#e5eaf0"} size={60} />}
      </div>
    </div>
  );
};

export default StatisticsCard;
