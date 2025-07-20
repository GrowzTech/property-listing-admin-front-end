import TextInput from "@/components/block/FormInput";
import FormWrapper from "@/components/block/FormWrapper";
import { Ruler } from "lucide-react";
import React from "react";

const PropertyDimensions = () => {
  return (
    <FormWrapper
      title="Property Dimensions"
      color="bg-[#ECFDF5]"
      description="Enter the size and layout details"
      icon={<Ruler size={14} color={"#E1C000"} />}
    >
      <div className="flex flex-col gap-6 px-6 w-full">
        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="Acreage"
            className="flex-1"
            placeholder="Acres"
            type="text"
          />
          <TextInput
            label="Built-up Area (sq ft)"
            className=" flex-1"
            placeholder="Square feet"
            type="text"
          />
          <TextInput
            label="Plot Area (sq ft)"
            placeholder="Square feet"
            type="text"
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default PropertyDimensions;
