import {
  Home,
  Settings,
  Plus,
  Building2,
  MessageSquare,
  CreditCard,
  LogOut,
} from "lucide-react";
import img from "../../../public/logoProperty.svg";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    subtitle: "Overview & Analytics",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Properties ",
    subtitle: "Manage Listings",
    url: "/admin/property",
    icon: Building2,
  },
  {
    title: "Add Property",
    subtitle: "Create New Listing",

    url: "/admin/add-property",
    icon: Plus,
  },
  {
    title: "Inquiries",
    subtitle: "Customer Messages",
    url: "/admin/message",
    icon: MessageSquare,
  },
  {
    title: "Transactions",
    subtitle: "Payments & Invoices",
    url: "/admin/payments",
    icon: CreditCard,
  },
];

const footerItems = [
  {
    icon: Settings,
    title: "Settings",
    url: "#",
  },
  {
    icon: LogOut,
    title: "LogOut",
    url: "#",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="'bg-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="py-6 border-b border-gray-200 flex items-center justify-center">
            {/* <div className="py-2 border-b border-gray-200 flex items-center justify-center"> */}
            <Image src={img} alt="Logo" width={220} height={39} />
            {/* </div> */}
          </SidebarGroupLabel>
          <SidebarGroupContent className="pt-10">
            <SidebarMenu>
              <SidebarMenuItem>
                <span className="text-[12px] font-bold text-[#8F899A]">
                  NAVIGATION
                </span>
              </SidebarMenuItem>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title} className="w-full">
                    <SidebarMenuButton className="w-full" asChild>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-1.5 w-full py-7 px-4${
                          isActive
                            ? " border border-[#BFDBFE] bg-[#EDFDFF]"
                            : ""
                        }`}
                      >
                        <item.icon color={isActive ? "#1D4ED8" : "#000"} />
                        <div className="flex flex-col justify-center gap-4">
                          <span className="leading-0 font-medium text-[14px]">
                            {item.title}
                          </span>
                          <span className="leading-0 font-normal text-[10px] text-[#6B7280]">
                            {item.subtitle}
                          </span>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* <SidebarMenuItem className="w-full"> */}
        <div className="flex items-center gap-2">
          <Image
            src={"logoProperty.svg"}
            alt="Logo"
            width={35}
            height={35}
            className="rounded-full w-[35px] h-[35px] bg-amber-200"
          />

          <div className="flex flex-col justify-center gap-4">
            <span className="text-[14px] text-[#374151] font-medium leading-0">
              Henok Zeru
            </span>
            <span className="text-[10px] text-[#6B7280] leading-0">
              henogato9876@gmail.com
            </span>
          </div>
        </div>
        {/* </SidebarMenuItem> */}
        {footerItems.map((item) => (
          <SidebarMenuButton key={item.title} className="w-full" asChild>
            <Link href={item.url} className="flex items-center gap-4">
              <item.icon color="#374151" size={16} />
              <span className="text-[14px] font-medium text-[#374151]">
                {item.title}
              </span>
            </Link>
          </SidebarMenuButton>
        ))}
      </SidebarFooter>
    </Sidebar>
  );
}
