import TableComponent from "@/components/block/Table";
import TableWrapper from "@/components/block/TableWrapper";
import React from "react";

const RecentPropertiesAndInquiries = () => {
  const rows = [
    {
      photo: "/land-2.jpg",
      title: "Admin",
      price: "$500,000",
      status: "Active",
    },
    {
      photo: "/land-2.jpg",
      title: "Manager",
      price: "$400,000",
      status: "Inactive",
    },
    {
      photo: "/land-2.jpg",
      title: "Manager",
      price: "$400,000",
      status: "Inactive",
    },
  ];

  const columns = [
    { key: "photo", label: "Photo", type: "image" },
    { key: "title", label: "Title", type: "text" },
    { key: "price", label: "Price", type: "number" },
    { key: "status", label: "Status", type: "badge" },
  ];

  const row2 = [
    {
      name: "Henok Assefa",
      message: "I'm interested in viewing...",
      status: "Active",
    },
    {
      name: "Henok Assefa",
      message: "I'm interested in viewing...",
      status: "Inactive",
    },
    {
      name: "Henok Assefa",
      message: "I'm interested in viewing...",
      status: "Inactive",
    },
  ];

  const column2 = [
    { key: "name", label: "Name", type: "text" },
    { key: "message", label: "Message", type: "text" },
    { key: "status", label: "Status", type: "badge" },
  ];

  return (
    <div className="flex w-full gap-6">
      <div className="flex-2">
        <TableWrapper
          title={"Recent Properties"}
          description={"Latest property listings"}
          url="#"
        >
          <TableComponent columns={columns} rows={rows} />
        </TableWrapper>
      </div>
      <div className="flex-1 h-full">
        <TableWrapper
          title={"Recent Inquiries"}
          description={"Latest customer inquiries"}
          url="#"
        >
          <TableComponent columns={column2} rows={row2} />
        </TableWrapper>
      </div>
    </div>
  );
};

export default RecentPropertiesAndInquiries;
