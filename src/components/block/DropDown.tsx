import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  placeholder?: string;
  onSelect?: (value: Option) => void;
  label?: string;
  isRequired?: boolean;
}

const InputLikeDropdown: React.FC<Props> = ({
  options,
  placeholder = "Select option",
  onSelect,
  label,
  isRequired,
}) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    onSelect?.(option);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {label && (
        <label className={`block text-[12px] text-[#333C4C] font-medium `}>
          {label} {isRequired && <span className="text-[#333C4C]">*</span>}
        </label>
      )}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <div
            className={clsx(
              "flex items-center justify-between w-full border rounded-md px-3 py-2 cursor-pointer",
              "text-sm text-gray-700 shadow-xs",
              open ? "ring-3 ring-gray-300" : ""
            )}
          >
            <span
              className={`${
                !selected?.label ? "text-muted-foreground" : "text-black"
              }`}
            >
              {selected?.label || placeholder}
            </span>
            {open ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          {options?.map((option) => (
            <div className="w-full" key={option.value}>
              <DropdownMenuItem
                onClick={() => handleSelect(option)}
                className="w-full"
              >
                {option.label}
              </DropdownMenuItem>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default InputLikeDropdown;
