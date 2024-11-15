import React from "react";
import { cn } from "@/lib/utils";
import { Title, ProductCard } from "@/components/shared";

interface ProductsGroupListProps {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
  title,
  items,
  categoryId,
  className,
  listClassName,
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div
        // ref={intersectionRef}
        className={cn("grid grid-cols-3 gap-[50px]", listClassName)}
      >
        {items
          .filter((product) => product.items.length > 0)
          .map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
      </div>
    </div>
  );
};
