import {
  Container,
  TopBar,
  Title,
  Filters,
  ProductsGroupList,
} from "@/components/shared";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*Filters*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Products*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Пицца 1",
                    imageUrl:
                      "https://static.pizzasushiwok.ru/images/menu_new/279-300.jpg",
                    items: [
                      {
                        price: 100,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Пицца 2",
                    imageUrl:
                      "https://static.pizzasushiwok.ru/images/menu_new/279-300.jpg",
                    items: [
                      {
                        price: 100,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Пицца 3",
                    imageUrl:
                      "https://static.pizzasushiwok.ru/images/menu_new/279-300.jpg",
                    items: [
                      {
                        price: 100,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "Пицца 4",
                    imageUrl:
                      "https://static.pizzasushiwok.ru/images/menu_new/279-300.jpg",
                    items: [
                      {
                        price: 100,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "Пицца 5",
                    imageUrl:
                      "https://static.pizzasushiwok.ru/images/menu_new/279-300.jpg",
                    items: [
                      {
                        price: 100,
                      },
                    ],
                  },
                ]}
                categoryId={1}
                className="mt-10"
                listClassName="gap-10"
              />

              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Пицца 1",
                    imageUrl:
                      "https://static.pizzasushiwok.ru/images/menu_new/279-300.jpg",
                    items: [
                      {
                        price: 100,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Пицца 2",
                    imageUrl:
                      "https://static.pizzasushiwok.ru/images/menu_new/279-300.jpg",
                    items: [
                      {
                        price: 100,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Пицца 3",
                    imageUrl:
                      "https://static.pizzasushiwok.ru/images/menu_new/279-300.jpg",
                    items: [
                      {
                        price: 100,
                      },
                    ],
                  },
                ]}
                categoryId={2}
                className="mt-10"
                listClassName="gap-10"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
