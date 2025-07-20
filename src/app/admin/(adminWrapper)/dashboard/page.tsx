"use client";
import Header from "@/components/block/Header";
import React from "react";
import Statistics from "./_components/Statistics";
import { Plus } from "lucide-react";
import Link from "next/link";
import Info from "./_components/Info";
import RecentPropertiesAndInquiries from "./_components/RecentPropertiesAndInquiries";
import Transaction from "./_components/Transaction";

const Page = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Header />
      <div className="flex flex-col gap-5 p-4 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6">
            <span className="font-bold text-[24px] leading-0 text-[#333C4C]">
              Welcome back , Beshir
            </span>
            <span className="font-medium text-[15px] text-[#6B7280] leading-0">
              Here&apos;s what&apos;s happening with your properties today
            </span>
          </div>
          <Link
            href="/admin/properties"
            className="flex items-center justify-between gap-2 bg-[#1C7ED6] rounded-md py-2 px-4"
          >
            <Plus color="#FFFFFF" />
            <span className="font-medium text-[14px] text-[#FFFFFF] leading-0">
              Add New Property
            </span>
          </Link>
        </div>
        <Statistics />
        <Info />
        <RecentPropertiesAndInquiries />
        <Transaction />
      </div>
    </div>
  );
};

export default Page;
