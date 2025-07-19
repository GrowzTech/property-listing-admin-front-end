import React from "react";
import TableHeader from "./TableHeader";

const TableWrapper = ({
  title,
  description,
  url,
  children,
}: {
  title: string;
  description: string;
  url?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col p-4 gap-6 bg-white w-full border border-[#E2E8F0] rounded-md h-full">
      <TableHeader title={title} description={description} url={url} />
      {children}
    </div>
  );
};

export default TableWrapper;
