"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Star, Upload } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";

type ImageUploaderProps = {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  captions: string[];
  setCaptions: React.Dispatch<React.SetStateAction<string[]>>;
};

export function ImageUploader({
  images,
  captions,
  setCaptions,
  setImages,
}: ImageUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [primaryImage, setPrimaryImage] = useState<string | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    const imageFiles = droppedFiles.filter((file) =>
      ["image/png", "image/jpeg", "image/jpg"].includes(file.type)
    );

    if (imageFiles.length === 0) return;

    setFiles((prev) => [...prev, ...imageFiles]);
    setImages((prev) => [...prev, ...imageFiles]);
    setPreviews((prev) => [
      ...prev,
      ...imageFiles.map((file) => URL.createObjectURL(file)),
    ]);
  };

  // Whenever `images` change, update previews and captions length to match
  useEffect(() => {
    const newPreviews = images.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);

    // Keep captions array length synced with images length
    setCaptions((prev) => {
      if (prev.length === images.length) return prev;
      // Add empty captions for new images
      return [...prev, ...new Array(images.length - prev.length).fill("")];
    });
  }, [images, setCaptions]);

  const updateCaption = (index: number, value: string) => {
    setCaptions((prev) => {
      const newCaptions = [...prev];
      newCaptions[index] = value;
      return newCaptions;
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const imageFiles = selectedFiles.filter((file) =>
      ["image/png", "image/jpeg", "image/jpg"].includes(file.type)
    );

    if (imageFiles.length === 0) return;

    setFiles((prev) => [...prev, ...imageFiles]);
    setImages((prev) => [...prev, ...imageFiles]);
    setPreviews((prev) => [
      ...prev,
      ...imageFiles.map((file) => URL.createObjectURL(file)),
    ]);
  };

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed bg-muted/50 text-muted-foreground transition-colors",
          isDragging ? "border-primary" : "border-muted"
        )}
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <Upload size={40} className="mb-2 h-6 w-6 text-muted-foreground" />
        <p className="text-[12px] font-medium text-[#6B7280]">
          <span className="font-semibold text-[12px] text-[#374151]">
            Click to upload
          </span>{" "}
          or drag and drop
        </p>
        <p className=" text-[10px] text-[#6B7280] font-medium ">
          PNG, JPG or JPEG (MAX. 5MB each)
        </p>
      </div>

      {(files.length && (
        <div className="flex w-full items-center justify-end px-6">
          <span className="text-[10px] text-[#6B7280]">
            Click on an image to set as primary
          </span>
        </div>
      )) || <></>}

      {previews.length > 0 && (
        <div className="flex flex-wrap w-full px-2 gap-2">
          {previews.map((src, idx) => (
            <div
              key={idx}
              className="rounded-md w-[400px] h-[280px] border relative"
            >
              <Image
                src={src}
                alt={`Preview ${idx}`}
                className="rounded  "
                width={400}
                height={250}
                onClick={() => {
                  setPrimaryImage(src);
                }}
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="absolute bottom-0 p-2 rounded-b-md bg-white z-50 w-full">
                <Input
                  placeholder="Caption"
                  value={captions[idx] || ""}
                  onChange={(e) => updateCaption(idx, e.target.value)}
                />
              </div>
              {primaryImage === src && (
                <div className="absolute top-2 left-2 bg-[#EAB308] px-2 rounded-full flex items-center gap-2 text-[white]">
                  <Star size={10} />
                  <span className="text-[12px] text-white">Primary</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ImageUploader;
