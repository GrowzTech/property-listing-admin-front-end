"use client";
import Header from "@/components/block/Header";
import React, { useState } from "react";
import BasicInfo from "./_components/BasicInfo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// import PropertyDimensions from "./_components/PropertyDimensions";
import PropertySpecs from "./_components/PropertySpecs";
import PropertyImage from "./_components/PropertyImage";
// import FeaturesAndAmenities from "./_components/FeaturesAndAmenities";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/block/Spinner";
import { useAppDispatch } from "@/lib/hooks";
import { propertyActions as actions } from "@/lib/features/property/propertySlice";
import { Property } from "@/lib/features/property/type";

const Page = () => {
  const dispatch = useAppDispatch();

  // Form state (merged from BasicInfo and PropertySpecs)
  const [formData, setFormData] = useState<Partial<Property>>({});
  const [images, setImages] = useState<File[]>([]);
  const [captions, setCaptions] = useState<string[]>([]);
  const [photos, setPhotos] = useState<{ url: string; caption: string }[]>([]);

  const handleUpdate = (data: Partial<Property>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData((prev: any) => ({ ...prev, ...data }));
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async () => {
    const { title, ...rest } = formData;
    if (!title) {
      alert("Title is required");
      return;
    }
    console.log(formData);
    if (!formData.title) {
      alert("Title is required");
      return;
    }

    setIsSubmitting(true); // start loading

    if (images.length > 0) {
      try {
        // Dispatch and wait for uploaded image URLs
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(
          actions.addImage({
            files: images,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSuccess: (responseData: any) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              console.log(responseData);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const updatedPhotos = responseData.map((data: any, idx: any) => ({
                index: data.index,
                url: data.url,
                caption: captions[idx] || "",
              }));
              setPhotos(updatedPhotos);
              handleUpdate({ images: updatedPhotos });

              console.log(updatedPhotos, formData);
              const finalData = { ...formData, images: updatedPhotos };
              dispatch(actions.addProperty(finalData as Omit<Property, "_id">));
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onError: (err: any) => {
              console.error("Upload failed", err);
            },
          })
        );
      } catch (err) {
        console.error("Failed to add property", err);
      } finally {
        setIsSubmitting(false); // stop loading in all cases
      }
    } else {
      dispatch(actions.addProperty(formData as Omit<Property, "_id">));
    }
  };
  console.log(formData);
  return (
    <div className="flex flex-col gap-3 w-full">
      <Header />
      <div className="flex flex-col gap-5 p-4 w-full">
        <div className="flex gap-4 items-center">
          <Link
            href="/admin/property"
            className="flex items-center justify-between gap-2 border border-[#E2E8F0] rounded-md py-2 px-4"
          >
            <ArrowLeft color="black" />
            <span className="font-medium text-[14px] text-[#000] leading-0">
              Back to Properties
            </span>
          </Link>
          <div className="flex flex-col gap-6">
            <span className="font-bold text-[24px] leading-0 text-[#333C4C]">
              Add New Property
            </span>
            <span className="font-medium text-[15px] text-[#6B7280] leading-0">
              Create a comprehensive property listing
            </span>
          </div>
        </div>
        <BasicInfo onChange={handleUpdate} />
        {/* <PropertyDimensions /> */}
        <PropertySpecs onChange={handleUpdate} />
        <PropertyImage
          onChange={handleUpdate}
          images={images}
          setImages={setImages}
          captions={captions}
          setCaptions={setCaptions}
        />
        {/* See if the client wants to add features and amenities */}
        {/* <FeaturesAndAmenities /> */}
        <div className="flex items-center justify-between w-full mt-3">
          <div className="flex gap-3 items-center">
            <Checkbox className="border-black" id={`terms`} />
            <Label
              htmlFor={`terms`}
              className="text-[#333C4C] font-medium text-[14px]"
            >
              Marked as Featured Property
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              className=" border  p-6 py-3 bg-white hover:bg-white rounded-md text-black flex justify-center items-center gap-1"
            >
              Cancel
              {false && <Spinner />}
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-[#1C7ED6] p-6 py-3 rounded-md hover:bg-[#1c7fd6f6] text-white flex justify-center items-center gap-1"
            >
              {isSubmitting ? (
                <>
                  <Spinner /> Creating...
                </>
              ) : (
                "Create Property"
              )}
              {false && <Spinner />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
