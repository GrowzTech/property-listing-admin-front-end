"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Badge from "@/components/block/Badge";
import {
  Calendar,
  Home,
  Mail,
  MapPin,
  MessageSquare,
  User,
} from "lucide-react";
import { Modal } from "@/components/block/Modal";
import CustomerInfo from "./CustomerInfo";
import CustomerMessage from "./CustomerMessage";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const totalItems = 13;
const pageSizeOptions = [5, 10, 20];

const MessagesTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);

  const currentPage = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const totalPages = Math.ceil(totalItems / limit);

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}&limit=${limit}`);
  };

  const handleLimitChange = (value: string) => {
    router.push(`?page=1&limit=${value}`);
  };

  const start = (currentPage - 1) * limit;
  const data = Array.from({ length: Math.min(limit, totalItems - start) });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6 w-full bg-[#white] border rounded-md">
        <Table>
          <TableHeader className="bg-[#F9FAFB] rounded-md">
            <TableRow>
              <TableHead className="text-[#94A3B8]">Property</TableHead>
              <TableHead className="text-[#94A3B8]">Customer</TableHead>
              <TableHead className="text-[#94A3B8]">Messages</TableHead>
              <TableHead className="text-[#94A3B8]">Status</TableHead>
              <TableHead className="text-[#94A3B8]">Date</TableHead>
              <TableHead className="text-[#94A3B8]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px] bg-[#E3E3E3] flex items-center justify-center rounded-md">
                      <Home size={20} color="#374151" />
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-[#333C4C]">
                        Luxury Oceanfront Villa
                      </p>
                      <span className="flex items-center gap-1 text-[#6B7280] text-[10px]">
                        <MapPin size={16} color="#6B7280" /> Miami
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User size={20} color="#374151" />
                    <div>
                      <p className="text-[12px] font-medium text-[#333C4C]">
                        Beshir Assefa
                      </p>
                      <span className="flex items-center gap-1 text-[#6B7280] text-[10px]">
                        <Mail size={16} color="#6B7280" />
                        henogato9876@gmail.com
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-[12px] text-[#2E2E2E] max-w-[200px] break-words">
                    I&#39;m interested in viewing this property...
                  </span>
                </TableCell>
                <TableCell>
                  <Badge color="bg-green-600" label="Available" />
                </TableCell>
                <TableCell>
                  <span className="flex gap-2 items-center">
                    <Calendar size={16} /> July 17
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => setOpen(true)}
                    className="border p-6 py-3 bg-white hover:bg-white rounded-md text-black flex justify-center items-center gap-1"
                  >
                    <MessageSquare size={8} color="black" />
                    Respond
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Bar */}
      <div className="flex justify-between items-center gap-4 px-2">
        <div className="flex items-center gap-2 text-sm">
          Show
          <Select value={limit.toString()} onValueChange={handleLimitChange}>
            <SelectTrigger className="w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          of {totalItems} inquiries
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </Button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i + 1}
              variant={i + 1 === currentPage ? "default" : "outline"}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Inquiry Details"
        width="min-w-[700px]"
        subTitle="Property : Downtown Office Space"
        status="Responded"
        titleIcon={<MessageSquare size={20} color="#374151" />}
      >
        <div className="flex flex-col items-end gap-4 mt-3">
          <CustomerInfo />
          <CustomerMessage />
        </div>
      </Modal>
    </div>
  );
};

export default MessagesTable;
