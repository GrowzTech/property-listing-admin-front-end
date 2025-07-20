import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { Grid, List, SlidersHorizontal } from "lucide-react";

const ListWrapper = ({
  children,
  displayMode,
  setDisplayMode,
  setToggleFilters,
  toggleFilters,
}: {
  children: React.ReactNode;
  setDisplayMode: Dispatch<SetStateAction<string>>;
  displayMode: string;
  setToggleFilters: Dispatch<SetStateAction<boolean>>;
  toggleFilters: boolean;
}) => {
  return (
    <div className="bg-white rounded-md flex flex-col gap-4 border border-[#E2E8F0] p-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <span className="font-bold leading-0 text-[20px] text-[#0A0A0A]">
            Property List
          </span>
          <span className="text-[12px] text-[#94A3B8] leading-0">
            Manage your property listings
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => setToggleFilters(!toggleFilters)}
            className="flex items-center hover:bg-white justify-between bg-white gap-2 border border-[#E2E8F0] rounded-md py-2 px-4"
          >
            <SlidersHorizontal size={18} color="black" />
            <span className="font-medium text-[14px] text-[#000] leading-0">
              Filters
            </span>
          </Button>
          <div
            className={`${
              displayMode === "gridView" ? "bg-[#d5e9fd]" : ""
            } p-1`}
          >
            <Grid
              onClick={() => setDisplayMode("gridView")}
              size={18}
              color="black"
            />
          </div>

          <div
            className={`${
              displayMode === "tableView" ? "bg-[#d5e9fd]" : ""
            } p-1`}
          >
            <List
              onClick={() => setDisplayMode("tableView")}
              size={18}
              color="black"
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ListWrapper;
