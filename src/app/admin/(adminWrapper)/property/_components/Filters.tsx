"use client";

import DropDown from "@/components/block/DropDown";
import TextInput from "@/components/block/FormInput";
import { SliderInput } from "@/components/block/Slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [acreageRange, setAcreageRange] = useState([0, 100]);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  // Sync from URL on mount
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);

    setSearch(sp.get("search") || "");
    setStatus(sp.get("status") || "");

    const sortParam = sp.get("sort") || "";
    const sortOrderParam = sp.get("sortOrder") || "";
    setSort(sortParam);
    setSortOrder(sortOrderParam);

    const minPrice = parseInt(sp.get("minPrice") || "0");
    const maxPrice = parseInt(sp.get("maxPrice") || "1000000");
    setPriceRange([minPrice, maxPrice]);

    const minAcreage = parseInt(sp.get("minAcreage") || "0");
    const maxAcreage = parseInt(sp.get("maxAcreage") || "100");
    setAcreageRange([minAcreage, maxAcreage]);

    setFeaturedOnly(sp.get("featured") === "true");
  }, []);

  // Update URL on filter change
  useEffect(() => {
    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (status) params.set("status", status);
    if (sort) params.set("sort", sort);
    if (sortOrder) params.set("sortOrder", sortOrder);

    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());

    params.set("minAcreage", acreageRange[0].toString());
    params.set("maxAcreage", acreageRange[1].toString());

    if (featuredOnly) params.set("featured", "true");

    router.push("?" + params.toString());
  }, [search, status, sort, sortOrder, priceRange, acreageRange, featuredOnly]);

  const handleReset = () => {
    setSearch("");
    setStatus("");
    setSort("");
    setSortOrder("");
    setPriceRange([0, 1000000]);
    setAcreageRange([0, 100]);
    setFeaturedOnly(false);
  };

  const handleSortChange = (option: { value: string }) => {
    if (!option?.value) return;
    const [field, order] = option.value.split("_");
    setSort(field);
    setSortOrder(order === "asc" ? "1" : "-1");
  };

  return (
    <div className="flex w-full flex-col gap-4 p-6 pb-16 bg-[#F9FAFB] border border-[#E2E8F0] rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <span className="font-bold text-[16px] text-[#333C4C]">
          Advanced Filter
        </span>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            onClick={handleReset}
            className="border p-6 py-3 bg-white hover:bg-white rounded-md text-black flex justify-center items-center gap-1"
          >
            <X size={8} color="black" />
            Reset
          </Button>
          <div className="flex items-center justify-center p-2 bg-white border rounded-sm">
            <X onClick={() => setToggleFilters(false)} size={18} color="black" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="w-full mt-3 flex flex-col justify-center gap-6">
        <div className="flex items-end justify-center gap-4  w-full">
          <TextInput
            label="Search"
            className="flex-1"
            placeholder="Search properties..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <DropDown
            options={options}
            placeholder="Select Status"
            onSelect={(option) => setStatus(option?.value || "")}
            label="Status"
            isRequired={false}
          />
          <DropDown
            options={sortOptions}
            placeholder="Select Sort Option"
            onSelect={handleSortChange}
            label="Sorted By"
            isRequired={false}
          />
        </div>

        <div className="flex items-center gap-4 w-full">
          <div className="w-1/3">
            <SliderInput
              label={`Price: $${priceRange[0]} - $${priceRange[1]}`}
              value={priceRange}
              onChange={setPriceRange}
              min={0}
              max={1000000}
              step={10000}
              range
            />
          </div>
          <div className="w-1/3">
            <SliderInput
              label={`Acreage: ${acreageRange[0]} - ${acreageRange[1]} acres`}
              value={acreageRange}
              onChange={setAcreageRange}
              min={0}
              max={100}
              step={1}
              range
            />
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox
              className="border-black"
              id="terms"
              checked={featuredOnly}
              onCheckedChange={() => setFeaturedOnly(!featuredOnly)}
            />
            <Label htmlFor="terms" className="text-[#333C4C] font-medium text-[14px]">
              Featured Properties Only
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
