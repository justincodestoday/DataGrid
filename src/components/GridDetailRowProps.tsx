import React from "react";
import { Product } from "../typings/interfaces";

interface GridDetailRowProps {
  dataItem: Product;
}

const GridDetailRowProps = ({ dataItem }: GridDetailRowProps) => {
  return (
    <section>
      <p className="mb-3">
        <strong>In Stock:</strong> {dataItem.UnitsInStock} units
      </p>
      <p className="mb-3">
        <strong>On Order:</strong> {dataItem.UnitsOnOrder} units
      </p>
      <p className="mb-3">
        <strong>Reorder Level:</strong> {dataItem.ReorderLevel} units
      </p>
      <p className="mb-3">
        <strong>Discontinued:</strong> {dataItem.Discontinued ? "Yes" : "No"}
      </p>
      <p>
        <strong>Category:</strong> {dataItem.Category?.CategoryName} -{" "}
        {dataItem.Category?.Description}
      </p>
    </section>
  );
};

export default GridDetailRowProps;
