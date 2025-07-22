import PropertyCard from "@/components/block/PropertyCard";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { propertyActions as actions } from "@/lib/features/property/propertySlice";
import { useSearchParams } from "next/navigation";

export const PropertyGridView = () => {
  const dispatch = useAppDispatch();

  const properties = useAppSelector((state) => state.property.property);


  const searchParams = useSearchParams();

  useEffect(() => {
    const query: Record<string, string> = {};
    for (const [key, value] of searchParams.entries()) {
      query[key] = value;
    }

    dispatch(actions.fetchproperty(query));
  }, [searchParams]);

  const formatFullDate = (dateString: string): string => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }); // e.g., "July 22, 2025"
  };

  return (
    <div className="flex flex-col gap-6 w-full ">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          title={property.title}
          location={property.address}
          type={property.property_type}
          price={property.price}
          description={property.description}
          views={150}
          listedDate={formatFullDate(property?.createdAt)}
          status={property.status}
          handleView={function (): void {
            console.log("Button clicked");
          }}
          handleEdit={function (): void {
            console.log("Button clicked");
          }}
          handleDelete={function (): void {
            console.log("Button clicked");
          }}
        />
      ))}
    </div>
  );
};
