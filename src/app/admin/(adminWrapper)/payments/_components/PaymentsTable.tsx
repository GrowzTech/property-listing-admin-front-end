import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Badge from "@/components/block/Badge";
import {
  Calendar,
  CreditCard,
  Home,
  Mail,
  MapPin,
  MessageSquare,
  Receipt,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentsTable = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 w-full bg-[#white] border rounded-md">
        <Table className="">
          <TableHeader className="bg-[#F9FAFB] rounded-md">
            <TableRow>
              <TableHead className="text-[#94A3B8]">Property</TableHead>
              <TableHead className="text-[#94A3B8]">Customer</TableHead>
              <TableHead className="text-[#94A3B8]">Payment Method</TableHead>
              <TableHead className="text-[#94A3B8]">Amount</TableHead>

              <TableHead className="text-[#94A3B8]">Status</TableHead>
              <TableHead className="text-[#94A3B8]">Date</TableHead>
              <TableHead className="text-[#94A3B8]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell className="text-[#2E2E2E]">
                  <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px] bg-[#E3E3E3] flex items-center justify-center rounded-md">
                      <Home size={20} color="#374151" />
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-[#333C4C">
                        Luxury Oceanfront Villa
                      </p>
                      <span className="flex items-center gap-1 text-[#6B7280] text-[10px]">
                        <MapPin size={16} color="#6B7280" /> Miami
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-[#2E2E2E]">
                  <div className="flex items-center gap-2">
                    <User size={20} color="#374151" />
                    <div>
                      <p className="text-[12px] font-medium text-[#333C4C">
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
                  <div className="flex items-center gap-2">
                    <CreditCard size={20} color="#374151" />
                    <div>
                      <p className="text-[12px] font-medium text-[#333C4C">
                        PayPal
                      </p>
                      <span className="flex items-center gap-1 text-[#6B7280] text-[10px]">
                        Contact
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-[#2E2E2E]">$499</TableCell>
                <TableCell className="text-[#2E2E2E]">
                  <Badge color="bg-green-600" label="Available" />
                </TableCell>

                <TableCell className="text-[#2E2E2E] ">
                  <span className="flex gap-2 items-center">
                    <Calendar size={16} /> July 17
                  </span>
                </TableCell>
                <TableCell className="text-[#2E2E2E]">
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      className=" border p-6 py-3 bg-white hover:bg-white rounded-md text-black flex justify-center items-center gap-1"
                    >
                      <Receipt size={8} color="black" />
                      Details
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentsTable;
