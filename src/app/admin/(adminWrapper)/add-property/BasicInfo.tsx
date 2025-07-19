import TextInput from "@/components/block/FormInput";
import FormWrapper from "@/components/block/FormWrapper";
import { Home } from "lucide-react";
import React from "react";

const BasicInfo = () => {
  return (
    <FormWrapper
      title="Basic Information"
      color="bg-[#ECFEFF]"
      description="Enter the fundamental details about the property"
      icon={<Home size={14} color={"#1D4ED8"} />}
    >
      <div className="flex flex-col gap-6 px-6 w-full">
        <TextInput
          label="Property Name"
          isRequired
          placeholder="e.g., Luxury Oceanfront Villa with Private Beach Access"
          type="text"
        />
        <TextInput
          label="Description"
          isRequired
          placeholder="Provide a detailed description of the property..."
          type="text"
        />
        <div className="flex items-center gap-4 w-full">
          <TextInput
            label="Price Amount"
            isRequired
            className="flex-1"
            placeholder="Enter price"
            type="text"
          />
          <TextInput
            label="Status"
            className=" flex-1"
            isRequired
            placeholder="Available"
            type="text"
          />
        </div>
        <TextInput
          label="Full Address"
          isRequired
          placeholder="e.g., 123 Ocean Drive, Paradise Bay"
          type="text"
        />
      </div>
    </FormWrapper>
  );
};

export default BasicInfo;
