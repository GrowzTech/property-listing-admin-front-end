import FormWrapper from "@/components/block/FormWrapper";
import ImageUploader from "@/components/block/ImageUploader";
import { Image as ImageIcon } from "lucide-react";
import React from "react";

const PropertyImage = () => {
  return (
    <FormWrapper
      title="Property Images"
      color="bg-[#ECFDF5]"
      description="Enter the size and layout details"
      icon={<ImageIcon size={14} color={"#4F46E5"} />}
    >
      <div>
        <ImageUploader />
      </div>
    </FormWrapper>
  );
};

export default PropertyImage;
