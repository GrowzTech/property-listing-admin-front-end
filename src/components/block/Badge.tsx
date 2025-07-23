import React from "react";

interface BadgeProps {
  label: React.ReactNode;
  color: string;
}

import { PropertyStatus } from "@/lib/features/property/type"; // adjust the path

export const statusColorMap: Record<PropertyStatus, string> = {
  [PropertyStatus.AVAILABLE]: "bg-green-500",
  [PropertyStatus.PENDING]: "bg-yellow-500",
  [PropertyStatus.SOLD]: "bg-red-500",
};

const Badge: React.FC<BadgeProps> = ({ label, color }) => {
  return (
    <div
      className={`${color} text-white py-1 font-semibold text-[10px] px-2 flex justify-center items-center rounded-xl`}
    >
      {label}
    </div>
  );
};

export default Badge;
