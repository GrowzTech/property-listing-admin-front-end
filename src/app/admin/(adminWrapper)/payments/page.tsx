"use client";
import Header from "@/components/block/Header";
import DropDown from "@/components/block/DropDown";
import React from "react";
import PaymentsTable from "./_components/PaymentsTable";
import Statistics from "./_components/Statistics";

const options = [
  { label: "Profile", value: "profile" },
  { label: "Billing", value: "billing" },
  { label: "Team", value: "team" },
  { label: "Subscription", value: "subscription" },
];

const Page = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Header />
      <div className="flex flex-col gap-10 p-4 w-full">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-6">
            <span className="font-bold text-[24px] leading-0 text-[#333C4C]">
              Payment Transactions
            </span>
            <span className="font-medium text-[15px] text-[#6B7280] leading-0">
              Manage all payment transactions and invoices
            </span>
          </div>
        </div>

        <Statistics />

        <div className="flex flex-col p-4 pt-8 gap-6 bg-white w-full border border-[#E2E8F0] rounded-md h-full">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-5">
              <span className="font-bold leading-0 text-[20px] text-[#0A0A0A]">
                Transaction History
              </span>
              <span className="text-[12px] leading-0 text-[#94A3B8]">
                Detailed view of all payment transactions
              </span>
            </div>
            <div className="w-[120px]">
              <DropDown
                options={options}
                placeholder="Date Listed"
                onSelect={(option) => console.log(option)}
                isRequired={false}
              />
            </div>
          </div>

          <PaymentsTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
