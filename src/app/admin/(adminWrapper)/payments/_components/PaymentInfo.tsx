import { CreditCard, Calendar } from "lucide-react";
import { InfoCard } from "@/components/block/InfoCard";

export default function PaymentInfo() {
  return (
    <InfoCard
      title="Payment Information"
      icon={<CreditCard size={20} color="#374151" />}
      infoItems={[
        { label: "Payment Type", value: "Contact" },
        {
          label: "Payment Method",
          value: "PayPal",
          icon: <CreditCard size={13} />,
        },
        {
          label: "Amount",
          value: "$499",
        },
        {
          label: "Date",
          value: "Wed , Jul 16 , 2025 ,12:15 PM",
          icon: <Calendar size={13} />,
        },
      ]}
    />
  );
}
