import TextInput from "@/components/block/FormInput";
import FormWrapper from "@/components/block/FormWrapper";
import { Ruler } from "lucide-react";
import React from "react";

const PropertySpecs = () => {
  return (
    <FormWrapper
      title="More Details"
      color="bg-[#ECFDF5]"
      description="Enter the size and layout details"
      icon={<Ruler size={14} color={"#E1C000"} />}
    >
      <div className="flex flex-col gap-6 px-6 w-full">
        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="Acreage"
            className=" flex-1"
            placeholder="Acres"
            type="text"
          />
          <TextInput
            label="Parcel Size"
            className="flex-1"
            placeholder="Acres"
            type="text"
          />
          <TextInput
            label="State"
            className=" flex-1"
            placeholder="State"
            type="text"
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="GPS"
            placeholder="Square feet"
            type="text"
            className=" flex-1"
          />
          <TextInput
            label="Zip"
            className="flex-1"
            placeholder="Zip"
            type="text"
          />
          <TextInput
            label="Parcel Number"
            className=" flex-1"
            placeholder="Parcel Number"
            type="text"
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="Current Zoning"
            placeholder="Current Zoning"
            type="text"
            className=" flex-1"
          />
          <TextInput
            label="Conveyance"
            className="flex-1"
            placeholder="Conveyance"
            type="text"
          />
          <TextInput
            label="General Elevation"
            className=" flex-1"
            placeholder="General Elevation"
            type="text"
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="Taxes"
            placeholder="Taxes"
            type="text"
            className=" flex-1"
          />
          <TextInput
            label="Sewer"
            className="flex-1"
            placeholder="Sewer"
            type="text"
          />
          <TextInput
            label="City"
            className=" flex-1"
            placeholder="City"
            type="text"
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="Access"
            className="flex-1"
            placeholder="Sewer"
            type="text"
          />
          <TextInput
            label="Terrain"
            className=" flex-1"
            placeholder="Terrain"
            type="text"
          />
          <TextInput
            label="HOA Fee"
            placeholder="HOA Fee"
            type="text"
            className=" flex-1"
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="Water"
            className="flex-1"
            placeholder="Water"
            type="text"
          />
          <TextInput
            label="Phone"
            className=" flex-1"
            placeholder="Phone"
            type="text"
          />
          <TextInput
            label="Power"
            placeholder="Power"
            type="text"
            className=" flex-1"
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default PropertySpecs;
