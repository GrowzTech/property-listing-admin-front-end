import { Edit, Eye, Home, MapPin, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import Badge, { statusColorMap } from "./Badge";
import { Button } from "../ui/button";

const PropertyCard = ({
  title,
  // location,
  // type,
  price,
  description,
  views,
  listedDate,
  status,
  handleView,
  handleEdit,
  handleDelete,
  image,
}: {
  title: string;
  location: string;
  type: string;
  price: number;
  description: string;
  views: number;
  listedDate: string;
  status: string;
  handleView: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
  image?: string;
}) => {
  return (
    <div className="flex justify-center items-start w-full p-6 bg-[#FBFCFC] border rounded-md gap-4">
      <div className="flex-1 h-[255px]">
        <div className="w-full h-full rounded-md">
          <Image
            src={image || "/land-2.jpg"}
            alt="Property image"
            width={100}
            height={100}
            // Next.js Image component optimizes images automatically
            quality={100}
            unoptimized={true}
            className="w-full h-full object-cover object-center bg-gray-200 rounded-md"
          />
        </div>
      </div>
      <div className="flex-2 flex flex-col gap-2">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-2 flex flex-col gap-2">
            <span className="font-bold text-[22px] text-[#333C4C]">
              {title}
            </span>
            {/* <span className="flex font-medium text-[#6B7280] items-center gap-3">
              <MapPin size={16} />
              {location}
            </span>
            <span className="flex font-medium text-[#6B7280] items-center gap-3">
              <Home size={16} />
              {type}
            </span> */}
          </div>
          <div className="flex flex-col items-end gap-0">
            <span className="font-bold text-[28px] text-[#333C4C]">
              {price}
            </span>
            <span className="font-semibold text-[14px] text-[#6B7280]">
              Purchase
            </span>
          </div>
        </div>
        <span className="flex font-medium text-[#6B7280] items-center gap-3">
          {description}
        </span>
        <div className="flex justify-between mt-5 items-center">
          <div className="flex-1 h-full flex items-center bottom-0  gap-2">
            <Badge
              label={status.toUpperCase()}
              color={
                statusColorMap[status as keyof typeof statusColorMap] ||
                "bg-green-500"
              }
            />
            <span className=" text-[#6B7280] text-[12px]">
              {views} Views • Listed {listedDate}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={handleView}
              type="button"
              className=" border p-6 py-3 bg-white hover:bg-white rounded-md text-black flex justify-center items-center gap-1"
            >
              <Eye size={8} color="black" />
              View
            </Button>
            <Button
              onClick={handleEdit}
              type="button"
              className=" border p-6 py-3 bg-white hover:bg-white rounded-md text-black flex justify-center items-center gap-1"
            >
              <Edit size={8} color="black" />
              Edit
            </Button>
            <Button
              onClick={handleDelete}
              type="button"
              className=" border p-6 py-3 bg-white hover:bg-white rounded-md text-black flex justify-center items-center gap-1"
            >
              <Trash2 size={8} color="black" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
