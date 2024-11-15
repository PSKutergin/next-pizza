import React from "react";
import {
  Title,
  FilterCheckbox,
  RangeSlider,
  CheckboxFiltersGroup,
} from "@/components/shared";
import { Input } from "@/components/ui";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="font-bold mb-5" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" name="assemble" />
        <FilterCheckbox text="Новинки" value="2" name="new" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-7 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты:"
        className="mt-5"
        limit={6}
        items={[
          {
            value: "1",
            text: "Мясо",
          },
          {
            value: "2",
            text: "Сыр",
          },
          {
            value: "3",
            text: "Перец",
          },
          {
            value: "4",
            text: "Салат",
          },
          {
            value: "5",
            text: "Картофель",
          },
          {
            value: "6",
            text: "Курица",
          },
          {
            value: "7",
            text: "Курица",
          },
          {
            value: "8",
            text: "Курица",
          },
          {
            value: "9",
            text: "Курица",
          },
          {
            value: "10",
            text: "Курица",
          },
          {
            value: "11",
            text: "Курица",
          },
          {
            value: "12",
            text: "Курица",
          },
          {
            value: "13",
            text: "Курица",
          },
          {
            value: "14",
            text: "Курица",
          },
          {
            value: "15",
            text: "Курица",
          },
        ]}
        defaultItems={[
          {
            value: "1",
            text: "Мясо",
          },
          {
            value: "2",
            text: "Сыр",
          },
          {
            value: "3",
            text: "Перец",
          },
          {
            value: "4",
            text: "Салат",
          },
          {
            value: "5",
            text: "Картофель",
          },
          {
            value: "6",
            text: "Курица",
          },
        ]}
      />
    </div>
  );
};
