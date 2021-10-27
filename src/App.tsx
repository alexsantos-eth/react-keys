import React, { useState } from "react";
import Guy from "./guy";

interface GuyProps {
  name: string;
  id: number;
}

const data: GuyProps[] = [
  { name: "Alex", id: 0 },
  { name: "Daniel", id: 1 },
];

const List: React.FC = () => {
  const [guys, setGuys] = useState<GuyProps[]>(data);

  const add = (index: number) => () =>
    setGuys((prevGuys) => {
      // COPIAR DATOS PREVIOS
      const copy = [...prevGuys];
      const defGuy: GuyProps = { name: "", id: copy.length + 1 };

      // INSERTAR Y ACTUALIZAR
      copy.splice(index + 1, 0, defGuy);
      return copy;
    });

  return (
    <>
      {guys.map((guy, index) => (
        <Guy key={guy.id} {...guy} onAdd={add(index)} />
      ))}
    </>
  );
};

export default List;
