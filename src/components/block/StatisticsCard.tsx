import React from "react";

const StatisticsCard = ({
  color,
  bgColor,
  title,
  value,
  Icon,
  description,
  isDefault = false,
  statusDetails,
}: {
  bgColor: string;
  color: string;
  title: string;
  value: string | number;
  Icon: React.ElementType;
  description: string;
  isDefault?: boolean;
  statusDetails?: {
    available: number;
    pending: number;
    sold: number;
  };
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

      {/* If the status details is provided change the layout of the card */}
      {statusDetails ? (
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[24px]">{value}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#94A3B8] text-[12px]">
                {statusDetails?.available} Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#94A3B8] text-[12px]">
                {statusDetails?.pending} Pending
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#94A3B8] text-[12px]">
                {statusDetails?.sold} Sold
              </span>
            </div>
          </div>
        </div>
      ) : (
        <span className="font-bold text-[24px]">{value}</span>
      )}

      {/* don't show the description if the status details is provided */}

      {!statusDetails ? (
        <span className="text-[#94A3B8] text-[12px]">{description}</span>
      ) : (
        <span></span>
      )}
      <div className="absolute font-normal bottom-1 right-1 z-50">
        {!isDefault && !statusDetails && <Icon color={"#e5eaf0"} size={60} />}
      </div>
    </div>
  );
};

export default StatisticsCard;
