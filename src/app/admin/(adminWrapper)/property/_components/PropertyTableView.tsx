import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Badge from "@/components/block/Badge";
import { Edit, Eye, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { propertyActions as actions } from "@/lib/features/property/propertySlice";

const PropertyTableView = () => {
  const dispatch = useAppDispatch();

  const properties = useAppSelector((state) => state.property.property);

  useEffect(() => {
    dispatch(actions.fetchproperty());
  }, []);

   const formatFullDate = (dateString: string): string => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }); // e.g., "July 22, 2025"
};

  return (
    <div className="flex flex-col gap-6 w-full bg-[#white] border rounded-md">
      <Table className="">
        <TableHeader className="bg-[#F9FAFB] rounded-md">
          <TableRow>
            <TableHead className="text-[#94A3B8]">Photo</TableHead>
            <TableHead className="text-[#94A3B8]">Title</TableHead>
            <TableHead className="text-[#94A3B8]">Price</TableHead>
            <TableHead className="text-[#94A3B8]">Status</TableHead>
            <TableHead className="text-[#94A3B8]">Location</TableHead>
            <TableHead className="text-[#94A3B8]">Listed</TableHead>
            <TableHead className="text-[#94A3B8]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property, index) => (
            <TableRow key={index}>
              <TableCell className="text-[#2E2E2E]">
                <Image
                  src={"/land-2.jpg"}
                  alt="photo"
                  width={35}
                  height={35}
                  style={{
                    objectFit: "cover",
                    borderRadius: "4px",
                    height: "35px",
                  }}
                  className="w-[35px] h-[35px] bg-amber-300 rounded-md"
                />
              </TableCell>
              <TableCell className="text-[#2E2E2E]">
                {property.title}
              </TableCell>
              <TableCell className="text-[#2E2E2E]">${property.price}</TableCell>
              <TableCell className="text-[#2E2E2E]">
                <Badge color="bg-green-600" label="Available" />
              </TableCell>
              <TableCell className="text-[#2E2E2E]">{property.city}</TableCell>
              <TableCell className="text-[#2E2E2E]">{formatFullDate(property?.createdAt)}</TableCell>
              <TableCell className="text-[#2E2E2E]">
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <Edit size={16} />
                  <Trash2 size={16} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropertyTableView;
