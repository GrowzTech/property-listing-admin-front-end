import React from "react";

interface BadgeProps {
  label: React.ReactNode;
  color: string;
}

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
