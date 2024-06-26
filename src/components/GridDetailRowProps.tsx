import React from "react";
import { PartialProduct } from "../typings/interfaces";

interface GridDetailRowProps {
  dataItem: PartialProduct;
}

const GridDetailRowProps = ({ dataItem }: GridDetailRowProps) => {
  return (
    <section>
      <p className="mb-3">
        <strong>In Stock:</strong> {dataItem.unitsInStock} units
      </p>
      <p className="mb-3">
        <strong>On Order:</strong> {dataItem.unitsOnOrder} units
      </p>
      <p className="mb-3">
        <strong>Reorder Level:</strong> {dataItem.reorderLevel} units
      </p>
      <p className="mb-3">
        <strong>Discontinued:</strong> {dataItem.discontinued ? "Yes" : "No"}
      </p>
      <p>
        <strong>Category:</strong> {dataItem.category?.categoryName} -{" "}
        {dataItem.category?.description}
      </p>
    </section>
  );
};

export default GridDetailRowProps;
