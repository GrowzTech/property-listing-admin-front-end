import { ReactNode } from "react";

interface InfoItem {
  label: string;
  value: string | ReactNode;
  icon?: ReactNode;
}

interface InfoCardProps {
  title: string;
  icon?: ReactNode;
  infoItems: InfoItem[];
  headerAction?: ReactNode;
}

export const InfoCard = ({
  title,
  icon,
  infoItems,
  headerAction,
}: InfoCardProps) => {
  return (
    <div className="w-full flex justify-between gap-6 flex-col border rounded-md p-4 bg-white">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {icon}
          <p className="text-[#0A0A0A] text-[20px] font-semibold">{title}</p>
        </div>
        {headerAction}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <p className="text-[#6B7280] text-[14px]">{item.label}</p>
            <p className="text-[#0A0A0A] text-[14px] flex items-center gap-2">
              {item.icon}
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
