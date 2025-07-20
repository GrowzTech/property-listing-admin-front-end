"use client";
import Header from "@/components/block/Header";
import ListWrapper from "@/components/block/ListWrapper";
import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Filters from "./_components/Filters";
import { PropertyGridView } from "./_components/PropertyGridView";
import PropertyTableView from "./_components/PropertyTableView";

const Page = () => {
  const [displayMode, setDisplayMode] = useState("gridView");
  const [toggleFilters, setToggleFilters] = useState(false);
  return (
    <div className="flex flex-col gap-3 w-full">
      <Header />
      <div className="flex flex-col gap-5 p-4 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6">
            <span className="font-bold text-[24px] leading-0 text-[#333C4C]">
              Property Listings
            </span>
            <span className="font-medium text-[15px] text-[#6B7280] leading-0">
              Manage your property portfolio
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
        <ListWrapper
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
          setToggleFilters={setToggleFilters}
          toggleFilters={toggleFilters}
        >
          {toggleFilters && <Filters />}

          <div>
            {displayMode === "gridView" ? (
              <PropertyGridView />
            ) : (
              <PropertyTableView />
            )}
          </div>
        </ListWrapper>
      </div>
    </div>
  );
};

export default Page;
