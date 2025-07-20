import PropertyCard from "@/components/block/PropertyCard";
import React from "react";

export const PropertyGridView = () => {
  const properties = [
    {
      id: 1,
      title: "Beautiful Family Home",
      location: "123 Main St, Springfield",
      type: "House",
      price: 250000,
      description: "A beautiful family home with a spacious yard.",
      views: 150,
      listedDate: "2023-10-01",
      status: "Available",
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "456 Elm St, Springfield",
      type: "Apartment",
      price: 180000,
      description: "A modern apartment in the city center.",
      views: 200,
      listedDate: "2023-10-05",
      status: "Available",
    },
  ];
  return (
    <div className="flex flex-col gap-6 w-full ">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          title={property.title}
          location={property.location}
          type={property.type}
          price={property.price}
          description={property.description}
          views={property.views}
          listedDate={property.listedDate}
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
