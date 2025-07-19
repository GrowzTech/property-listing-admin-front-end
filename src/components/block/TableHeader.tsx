import Link from "next/link";
import React from "react";

const TableHeader = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url?: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-5">
        <span className="font-bold leading-0 text-[20px] text-[#0A0A0A]">
          {title}
        </span>
        <span className="text-[12px] leading-0 text-[#94A3B8]">
          {description}
        </span>
      </div>
      {url && (
        <Link
          href={url || "#"}
          className="flex p-4 py-2 rounded-md border border-[#E2E8F0]"
        >
          view All
        </Link>
      )}
    </div>
  );
};

export default TableHeader;
