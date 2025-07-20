import { CreditCard } from "lucide-react";
import Link from "next/link";
import { InfoCard } from "@/components/block/InfoCard"; // Adjust the path

export default function PropertyInfo() {
  return (
    <InfoCard
      title="Property Information"
      icon={<CreditCard size={20} color="#374151" />}
      headerAction={
        <Link
          href="#"
          className="flex p-4 py-2 rounded-md border text-black border-[#E2E8F0]"
        >
          View Property
        </Link>
      }
      infoItems={[
        { label: "Property Title", value: "Suburban Family Home" },
        {
          label: "Location",
          value: "123 Ocean Drive, Paradise Bay",
          icon: <CreditCard size={13} />,
        },
      ]}
    />
  );
}
