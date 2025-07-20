import React from "react";
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

const PropertyTableView = () => {
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
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="text-[#2E2E2E]">
                <Image
                  src={"/placeholder.jpg"}
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
                Luxury Oceanfront Villa with ...
              </TableCell>
              <TableCell className="text-[#2E2E2E]">$25,000</TableCell>
              <TableCell className="text-[#2E2E2E]">
                <Badge color="bg-green-600" label="Available" />
              </TableCell>
              <TableCell className="text-[#2E2E2E]">Miami</TableCell>
              <TableCell className="text-[#2E2E2E]">7/17/2025</TableCell>
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
