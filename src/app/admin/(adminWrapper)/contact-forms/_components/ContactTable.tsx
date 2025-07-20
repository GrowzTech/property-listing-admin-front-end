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
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/block/Modal";
import CustomerInfo from "./CustomerInfo";
import CustomerMessage from "./CustomerMessage";

const MessagesTable = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div className="flex flex-col gap-6 w-full bg-[#white] border rounded-md">
        <Table className="">
          <TableHeader className="bg-[#F9FAFB] rounded-md">
            <TableRow>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-[#94A3B8]">No.</p>
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center justify-center gap-2">
                  <User size={16} color="#374151" />
                  Name
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center justify-center gap-2">
                  <Mail size={16} color="#374151" />
                  Email
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center justify-center gap-2">
                  <Phone size={16} color="#374151" />
                  Phone
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center justify-center gap-2">
                  <MapPin size={16} color="#374151" />
                  Location
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center justify-center gap-2">
                  <MessageSquare size={16} color="#374151" />
                  Messages
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center justify-center gap-2">
                  <Calendar size={16} color="#374151" />
                  Date
                </div>
              </TableHead>
              <TableHead className="text-[#94A3B8]">
                <div className="flex items-center justify-center gap-2">
                  <Eye size={16} color="#374151" />
                  View
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index} className="text-[#333C4C]">
                <TableCell>
                  <p className="font-medium text-center">{index + 1}</p>
                </TableCell>
                <TableCell>
                  <p className="font-medium text-center">Beshir dekebo</p>
                </TableCell>
                <TableCell>
                  <p className="font-medium text-center">
                    beshirdekebo@gmail.com
                  </p>
                </TableCell>
                <TableCell>
                  <p className="font-medium text-center">+251911111111</p>
                </TableCell>

                <TableCell>
                  <p className="font-medium text-center">
                    Addis Ababa, Ethiopia
                  </p>
                </TableCell>
                <TableCell>
                  <p className="font-medium text-center max-w-[300px] truncate ">
                    Hello, I am interested in this property. When would be a
                    good time to schedule a visit?
                  </p>
                </TableCell>
                <TableCell>
                  <p className="font-medium text-center">2025-07-20</p>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => setOpen(true)}
                    className="bg-[#333C4C] text-white rounded-md text-center w-full"
                  >
                    <Eye size={16} color="white" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Inquiry Details"
        width="min-w-[700px]"
        subTitle="Property : Downtown Office Space"
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
