import { Categories, Container, Title } from "@/components/shared";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
        <Categories />
      </Container>
    </>
  );
}
