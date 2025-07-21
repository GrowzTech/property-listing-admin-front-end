import TextInput from "@/components/block/FormInput";
import FormWrapper from "@/components/block/FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
            className="flex-1 w-1/2"
            placeholder="Enter price"
            type="text"
          />
          <div className="w-1/3 flex-col items-center">
            <Label className="text-[#333C4C] font-medium text-[14px]">
              Status*
            </Label>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <Input
                  id="available"
                  type="radio"
                  name="status"
                  value="available"
                  defaultChecked
                  className="size-5"
                />
                <Label htmlFor="available">Available</Label>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  id="pending"
                  type="radio"
                  name="status"
                  value="pending"
                  className="size-5"
                />
                <Label htmlFor="pending">Pending</Label>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  id="sold"
                  type="radio"
                  name="status"
                  value="sold"
                  className="size-5"
                />
                <Label htmlFor="sold">Sold</Label>
              </div>
            </div>
          </div>
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
