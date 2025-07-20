import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  MessageSquare,
} from "lucide-react";

const MessagesTable = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 w-full bg-[#white] border rounded-md">
        <Table className="">
          <TableHeader className="bg-[#F9FAFB] rounded-md">
            <TableRow>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <p className="text-[#94A3B8]">No.</p>
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <User size={16} color="#374151" />
                  Name
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Mail size={16} color="#374151" />
                  Email
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Phone size={16} color="#374151" />
                  Phone
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <MapPin size={16} color="#374151" />
                  Location
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} color="#374151" />
                  Messages
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Calendar size={16} color="#374151" />
                  Date
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index} className="text-[#333C4C]">
                <TableCell>
                  <p className="font-medium">{index + 1}</p>
                </TableCell>
                <TableCell>
                  <p className="font-medium ">Beshir dekebo</p>
                </TableCell>
                <TableCell>
                  <p className="font-medium">beshirdekebo@gmail.com</p>
                </TableCell>
                <TableCell>
                  <p className="font-medium">+251911111111</p>
                </TableCell>

                <TableCell>
                  <p className="font-medium">Addis Ababa, Ethiopia</p>
                </TableCell>
                <TableCell>
                  <p className="font-medium max-w-[200px] truncate ">
                    Hello, I am interested in this property. When would be a
                    good time to schedule a visit?
                  </p>
                </TableCell>
                <TableCell>
                  <p className="font-medium">2025-07-20</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MessagesTable;
