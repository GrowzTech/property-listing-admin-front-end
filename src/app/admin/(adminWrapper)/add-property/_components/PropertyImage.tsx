import FormWrapper from "@/components/block/FormWrapper";
import ImageUploader from "@/components/block/ImageUploader";
import { Property } from "@/lib/features/property/type";
import { Image as ImageIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const PropertyImage = ({
  onChange,
  setImages,
  setCaptions,
  images,
  captions
}: {
  onChange: (data: Partial<Property>) => void;
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  captions: string[];
  setCaptions: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <FormWrapper
      title="Property Images"
      color="bg-[#ECFDF5]"
      description="Enter the size and layout details"
      icon={<ImageIcon size={14} color={"#4F46E5"} />}
    >
      <div>
        <ImageUploader
          images={images}
          setImages={setImages}
          captions={captions}
          setCaptions={setCaptions}
        />
      </div>
    </FormWrapper>
  );
};

export default PropertyImage;
