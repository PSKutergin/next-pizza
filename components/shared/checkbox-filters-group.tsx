"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "@/components/shared";
import { Input } from "@/components/ui";

type Item = FilterChecboxProps;

interface CheckboxFiltersGroupProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValues?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValues,
  className,
}) => {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item) => (
          <FilterCheckbox
            key={item.value}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};
