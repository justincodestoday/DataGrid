import React, { useState } from "react";

import GridDetailRowProps from "./GridDetailRowProps";
import { PartialProduct } from "../typings/interfaces";

interface GridProps {
  data: PartialProduct[];
}

const Grid = ({ data }: GridProps) => {
  const [products, setProducts] = useState<PartialProduct[]>(data);

  const expandChange = (productId: number) => {
    const productData = products.map((product) =>
      product.productId === productId
        ? { ...product, expanded: !product.expanded }
        : product,
    );
    setProducts(productData);
  };

  return (
    <div className="container">
      <div className="h-screen overflow-x-auto overflow-y-auto">
        <div className="grid min-w-full grid-cols-12 bg-gray-100 text-left text-sm">
          <div className="border border-gray-200 py-3"></div>
          <div className="col-span-5 border border-gray-200 py-3 ps-2">
            Product
          </div>
          <div className="border border-gray-200 py-3 ps-2">ID</div>
          <div className="border border-gray-200 py-3 ps-2">Unit Price</div>
          <div className="col-span-4 border border-gray-200 py-3 ps-2">
            Qty Per Unit
          </div>
        </div>

        {products.map((product, index) => (
          <div
            className={`grid min-w-full grid-cols-12 text-left text-sm ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <React.Fragment key={product.productId}>
              <div className="flex justify-center border border-gray-200 py-3">
                <button
                  className="text-lg focus:outline-none"
                  onClick={() => expandChange(product.productId!)}
                >
                  {product.expanded ? (
                    <svg
                      fill="#000000"
                      width="20"
                      height="20"
                      viewBox="0 0 256 256"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M216,132H40a4,4,0,0,1,0-8H216a4,4,0,0,1,0,8Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 -0.5 21 21"
                    >
                      <path
                        fill="#000"
                        fill-rule="evenodd"
                        d="M21 9v2h-9.45v9h-2.1v-9H0V9h9.45V0h2.1v9z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="col-span-5 border border-gray-200 py-3 ps-2">
                {product.productName}
              </div>
              <div className="border border-gray-200 py-3 ps-2">
                {product.productId}
              </div>
              <div className="border border-gray-200 py-3 ps-2">
                {product.unitPrice}
              </div>
              <div className="col-span-4 border border-gray-200 py-3 ps-2">
                {product.quantityPerUnit}
              </div>
              {product.expanded && (
                <div className="col-span-full border border-gray-200 py-3 ps-6">
                  <GridDetailRowProps dataItem={product} />
                </div>
              )}
            </React.Fragment>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
