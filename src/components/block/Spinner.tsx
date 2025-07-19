import { Loader2 } from "lucide-react";

export const Spinner = ({ color }: { color?: string }) => {
  return (
    <Loader2
      color={color || "white"}
      className="h-8 w-8 animate-spin text-muted-foreground"
    />
  );
};
