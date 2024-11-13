import React from "react";

import { cn } from "@/lib/utils";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 bg-gray-50 p-5 rounded-2xl",
        className
      )}
    >
      Filters
    </div>
  );
};
