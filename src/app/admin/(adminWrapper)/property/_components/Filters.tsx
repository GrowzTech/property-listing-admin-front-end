import DropDown from "@/components/block/DropDown";
import TextInput from "@/components/block/FormInput";
import { SliderInput } from "@/components/block/Slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import React, { useState } from "react";

const options = [
  { label: "Available", value: "available" },
  { label: "Pending", value: "pending" },
  { label: "Sold", value: "sold" },
];

const sortOptions = [
  { label: "Price (High to Low)", value: "price_desc" },
  { label: "Price (Low to High)", value: "price_asc" },
  { label: "Acreage (High to Low)", value: "acreage_desc" },
  { label: "Acreage (Low to High)", value: "acreage_asc" },
];

const Filters = ({
  setToggleFilters,
}: {
  setToggleFilters: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [progress, setProgress] = useState([30]);
  const [AcreageProgress, setAcreageProgress] = useState([80]);

  return (
    <div className="flex w-full flex-col gap-4 p-6 pb-16 bg-[#F9FAFB] border border-[#E2E8F0] rounded-md">
      <div className="flex items-center justify-between w-full">
        <span className="font-bold text-[16px] text-[#333C4C]">
          Advanced Filter
        </span>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            className=" border p-6 py-3 bg-white hover:bg-white rounded-md text-black flex justify-center items-center gap-1"
          >
            <X size={8} color="black" />
            Reset
          </Button>
          <div className="flex items-center justify-center p-2 bg-white border rounded-sm">
            <X
              onClick={() => {
                setToggleFilters(false);
              }}
              size={18}
              color="black"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-3 flex flex-col justify-center gap-6">
        <div className="flex items-end justify-center gap-4  w-full">
          <TextInput
            label="Search"
            className="flex-1"
            placeholder="Search properties..."
            type="text"
          />
          <DropDown
            options={options}
            placeholder="Select Status"
            onSelect={(option) => console.log(option)}
            label="Status"
            isRequired={false}
          />

          <DropDown
            options={sortOptions}
            placeholder="Select Sort Option"
            onSelect={(option) => console.log(option)}
            label="Sorted By"
            isRequired={false}
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="w-1/3">
            <SliderInput
              label={`Price: $0 - $${progress}`}
              value={progress}
              onChange={setProgress}
              min={0}
              max={100}
              step={5}
              color="red"
              className="bg-amber-100 text-[red]   [&>div]:bg-blue-500"
            />
          </div>
          <div className="w-1/3">
            <SliderInput
              label={`Acreage : 0 - ${AcreageProgress} acres`}
              value={AcreageProgress}
              onChange={setAcreageProgress}
              min={0}
              max={100}
              step={5}
              color="red"
              className="bg-amber-100 text-[red]   [&>div]:bg-blue-500"
            />
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox className="border-black" id={`terms`} />
            <Label
              htmlFor={`terms`}
              className="text-[#333C4C] font-medium text-[14px]"
            >
              Featured Properties Only
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
