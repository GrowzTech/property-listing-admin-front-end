import FormWrapper from "@/components/block/FormWrapper";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Wifi } from "lucide-react";
import React from "react";

const FeaturesAndAmenities = () => {
  const data = [
    { label: "Swimming Pool" },
    { label: "Private Pool" },
    { label: "WIFI" },
    { label: "Hot Water" },
    { label: "Parking" },
    { label: "Kitchen" },
    { label: "Beachfront" },
    { label: "Fresh Washer" },
    { label: "Skyline View" },
  ];
  return (
    <FormWrapper
      title="Features & Amenities"
      color="bg-[#ECFDF5]"
      description="Select available amenities and features"
      icon={<Wifi size={14} color={"#E1C000"} />}
    >
      <div className="flex flex-col gap-6 px-6 w-full">
        <span>Amenities</span>
        <div className=" grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div className="flex gap-3 items-center" key={index}>
              <Checkbox
                color="black"
                className="border-black "
                id={`amenity-${index}`}
              />
              <Label
                htmlFor={`amenity-${index}`}
                className="text-[#333C4C] font-medium text-[14px]"
              >
                {item.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </FormWrapper>
  );
};

export default FeaturesAndAmenities;
