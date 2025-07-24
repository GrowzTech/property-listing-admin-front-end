"use client";

import ProtectedRoute from "@/app/ProtectedRoutes";
import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/block/Sidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <div className=" w-screen h-screen text-black bg-[#F9FAFB] relative">
          <div className="absolute py-4 px-3 flex justify-center items-center z-50 ">
            <SidebarTrigger color="#374151" />
          </div>
          <div className="w-full h-screen bg-[#F9FAFB] text-black font-inter">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
