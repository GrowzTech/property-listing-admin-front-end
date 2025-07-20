import { Building, Users } from "lucide-react";
import React from "react";

const Info = ({}) => {
  const infoData = [
    {
      title: "Manage Properties",
      description: "TView and edit listings",
      icon: <Building color="#2767EC" size={16} />,
      color: "bg-[#DBEAFE]",
    },
    {
      title: "Customer Inquiries",
      description: "Respond to messages",
      icon: <Users color="#1EBB58" size={16} />,
      color: "bg-[#DCFCE7]",
    },
  ];
  return (
    <div className=" flex w-full gap-6">
      {infoData.map((item, index) => (
        <div
          key={index}
          className={`flex-1 flex items-center gap-2.5 bg-white rounded-lg p-4 text-black min-h-[86px] shadow relative`}
        >
          <div
            className={`flex justify-center items-center rounded-md p-1.5 ${item.color}`}
          >
            {item.icon}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[#374151] ">{item.title}</span>
            <span className="text-[12px] text-[#6B7280]">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
