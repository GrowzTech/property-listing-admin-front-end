import StatisticsCard from "@/components/block/StatisticsCard";
import { Building2, MessageSquare, TrendingUp } from "lucide-react";
import React from "react";

const Statistics = () => {
  const statisticsData = [
    {
      title: "Total Properties",
      value: 300,
      description: "Active listings",
      bgColor: "bg-[#EFF6FF]",
      color: "bg-[#2767EC]",
      Icon: Building2,
      statusDetails: {
        available: 100,
        pending: 100,
        sold: 100,
      },
    },
    {
      title: "Total Purchase Forms",
      value: 45,
      description: "9 waiting response",
      bgColor: "bg-[#EEFEF3]",
      color: "bg-[#1EBB58]",
      Icon: MessageSquare,
    },
    {
      title: "Total Reservation Deposits",
      value: "$22,455",
      description: "Reserved funds",
      bgColor: "bg-[#FFF6EA]",
      color: "bg-[#F56C13]",
      Icon: TrendingUp,
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
          statusDetails={item?.statusDetails}
        />
      ))}
    </div>
  );
};

export default Statistics;
