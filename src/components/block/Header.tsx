import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bell, ChevronRight, Search } from "lucide-react";
import { Input } from "../ui/input";

// Function to generate breadcrumb data
function generateBreadcrumb(pathname: string) {
  const paths = pathname.split("/").filter(Boolean);
  return paths.map((segment, index) => {
    const href = "/admin/dashboard";
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href,
    };
  });
}

const Header = () => {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumb(pathname);

  return (
    <div className="flex flex-row bg-white w-full items-center justify-between p-3 pl-10 text-black border-b border-[#E2E8F0]">
      <div className="bg-white">
        {breadcrumbs.length > 0 && (
          <div className="flex items-center gap-1">
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-1">
                {idx < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="text-[12px] text-[#6B7280] hover:underline"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[12px] font-medium text-black">
                    {crumb.label}
                  </span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight size={12} color="#6B7280" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className=" flex items-center gap-2">
        <div className=" flex items-center relative">
          <Input
            className=" pl-10 w-[276px] placeholder-[#474950] boarder border-[#CBD5E1]  placeholder:text-sm text-black"
            type={"text"}
            name="password"
            id="password"
            onChange={() => {}}
            placeholder="Search..."
          />
          <div className="absolute z-50 left-3">
            <Search color="#64666D" size={19} fillRule="evenodd" />
          </div>
        </div>
        <div className="flex items-center relative">
          <div className=" absolute w-[5px] h-[5px] rounded-full bg-red-500 z-50 right-0 top-0" />

          <Bell />
        </div>
      </div>
    </div>
  );
};

export default Header;
