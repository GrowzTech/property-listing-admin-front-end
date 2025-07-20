import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface Column {
  key: string;
  label: string;
  type: string;
}

// Row type: flexible keys, but values are always string
type Row = Record<string, string>;

const TableComponent = ({
  columns,
  rows,
}: {
  columns: Column[];
  rows: Row[];
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key} className="text-[#94A3B8]">
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column) => {
              const value = row[column.key as keyof typeof row];
              return (
                <TableCell key={column.key}>
                  <div className="min-h-[37px]">
                    {column.type === "image" ? (
                      <Image
                        src={value as string}
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
                    ) : column.type === "badge" ? (
                      <Badge className="bg-red-600">{value}</Badge>
                    ) : (
                      <span> {value}</span>
                    )}
                  </div>
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
