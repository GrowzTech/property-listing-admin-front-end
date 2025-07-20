import React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface SliderInputProps {
  className?: string;
  label?: string;
  value?: number[];
  onChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  showValue?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // for passing additional props to Slider
}

export function SliderInput({
  className,
  label,
  value = [50],
  onChange,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: SliderInputProps) {
  return (
    <div className="flex flex-col gap-4">
      {label && (
        <span className="text-[12px] leading-0 font-semibold text-[#333C4C]">
          {label}
        </span>
      )}
      <div className="flex items-center gap-4">
        <Slider
          color="blue"
          value={value}
          onValueChange={(val) => onChange?.(val)}
          min={min}
          max={max}
          step={step}
          className={cn("w-full", className)}
          {...props}
        />
      </div>
    </div>
  );
}
