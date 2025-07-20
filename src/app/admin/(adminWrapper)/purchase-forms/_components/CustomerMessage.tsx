import { MailOpen } from "lucide-react";
import React from "react";

const CustomerMessage = () => {
  return (
    <div className="w-full flex justify-between gap-6 flex-col border rounded-md p-4 bg-white">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <MailOpen size={20} color="#374151" />
          <p className="text-[#0A0A0A] text-[20px] font-semibold">
            Customer Message
          </p>
        </div>
      </div>
      <div className="flex flex-col p-4 bg-[#FAFAFA] gap-4">
        <p className="text-[#0A0A0A] text-[14px]">
          Yes, it&#39;s still available. Please call us at (555) 123-4567 to
          discuss lease terms.
        </p>
      </div>
    </div>
  );
};

export default CustomerMessage;
