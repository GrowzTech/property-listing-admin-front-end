import StatisticsCard from "@/components/block/StatisticsCard";
import { Building2, DollarSignIcon, User } from "lucide-react";
import React from "react";

const Statistics = () => {
  const statisticsData = [
    {
      title: "Total Revenue",
      value: 200,
      description: "Completed transactions",
      bgColor: "",
      color: "",
      Icon: DollarSignIcon,
      isDefault: true,
    },
    {
      title: "Contact Payments",
      value: 5,
      description: "$499 contact payment",
      bgColor: "",
      color: "",
      Icon: User,
      isDefault: true,
    },
    {
      title: " Property Payments",
      value: 9,
      description: "Purchases/Rentals",
      bgColor: "",
      color: "",
      Icon: Building2,
      isDefault: true,
    },
    {
      title: "Daily Revenue",
      value: 200,
      description: "Daily Completed transactions",
      bgColor: "",
      color: "",
      Icon: DollarSignIcon,
      isDefault: true,
    },
  ];

  return (
    <div className=" flex w-full gap-6">
      {statisticsData?.map((item, index) => (
        <StatisticsCard
          key={index}
          bgColor={item?.bgColor}
          color={item?.color}
          title={item?.title}
          value={item?.value}
          Icon={item?.Icon}
          description={item?.description}
          isDefault={item?.isDefault}
        />
      ))}
    </div>
  );
};

export default Statistics;
