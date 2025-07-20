import TableComponent from "@/components/block/Table";
import TableWrapper from "@/components/block/TableWrapper";
import React from "react";

const Transaction = () => {
  const rows = [
    {
      invoice: "INVOICE-001",
      amount: "$500,000",
      date: "2023-01-01",
      status: "Active",
    },
    {
      invoice: "INVOICE-002",
      amount: "$400,000",
      date: "2023-01-02",
      status: "Inactive",
    },
    {
      invoice: "INVOICE-003",
      amount: "$400,000",
      date: "2023-01-02",
      status: "Inactive",
    },
  ];

  const columns = [
    { key: "invoice", label: "Invoice ID", type: "text" },
    { key: "amount", label: "Amount", type: "text" },
    { key: "date", label: "Date", type: "date" },
    { key: "status", label: "Status", type: "badge" },
  ];
  return (
    <div className="w-full">
      <TableWrapper
        title={"Recent Transactions"}
        description={"Latest payment transactions"}
        url="#"
      >
        <TableComponent columns={columns} rows={rows} />
      </TableWrapper>
    </div>
  );
};

export default Transaction;
