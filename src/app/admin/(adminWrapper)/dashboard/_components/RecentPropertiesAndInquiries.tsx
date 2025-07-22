import TableComponent from "@/components/block/Table";
import TableWrapper from "@/components/block/TableWrapper";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { propertyActions as actions } from "@/lib/features/property/propertySlice";

const RecentPropertiesAndInquiries = () => {
  const dispatch = useAppDispatch();

  const properties = useAppSelector((state) => state.property.property);

  useEffect(() => {
    dispatch(actions.fetchproperty());
  }, []);

  const formatPrice = (
    amount: number,
    currency: string = "USD",
    locale: string = "en-US"
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0, // no decimals
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const rows = properties.slice(0, 3).map((prop) => ({
    photo: "/land-2.jpg", // or prop.images?.[0] || "/default.jpg"
    title: prop.title,
    price: formatPrice(prop.price),
    status: prop.status,
  }));

  const columns = [
    { key: "photo", label: "Photo", type: "image" },
    { key: "title", label: "Title", type: "text" },
    { key: "price", label: "Price", type: "number" },
    { key: "status", label: "Status", type: "badge" },
  ];

  const row2 = [
    {
      name: "Beshir Assefa",
      message: "I'm interested in viewing...",
      status: "Active",
    },
    {
      name: "Beshir Assefa",
      message: "I'm interested in viewing...",
      status: "Inactive",
    },
    {
      name: "Beshir Assefa",
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
