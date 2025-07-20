import { User, Mail, PhoneCall, Calendar } from "lucide-react";
import { InfoCard } from "@/components/block/InfoCard";

export default function CustomerInfo() {
  return (
    <InfoCard
      title="Customer Information"
      icon={<User size={20} color="#374151" />}
      infoItems={[
        { label: "Full Name", value: "Henok Assefa" },
        {
          label: "Email",
          value: "henok@example.com",
          icon: <Mail size={13} />,
        },
        {
          label: "Phone",
          value: "+1 234 567 890",
          icon: <PhoneCall size={13} />,
        },
      ]}
    />
  );
}
