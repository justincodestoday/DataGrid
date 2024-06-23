import React, { useState } from "react";

import GridDetailRowProps from "./GridDetailRowProps";
import { Product } from "../typings/interfaces";

interface GridProps {
  data: Product[];
}

const Grid = ({ data }: GridProps) => {
  const [products, setProducts] = useState<Product[]>(data);

  const expandChange = (productId: number) => {
    const productData = products.map((product) =>
      product.ProductID === productId
        ? { ...product, expanded: !product.expanded }
        : product
    );
    setProducts(productData);
  };

  return (
    <div className="mx-20 mb-10">
      <div className="overflow-x-auto overflow-y-auto max-h-screen">
        <div className="min-w-full grid grid-cols-12 text-left text-sm bg-gray-100">
          <div className="py-3 border border-gray-200"></div>
          <div className="ps-2 py-3 border border-gray-200 col-span-5">
            Product
          </div>
          <div className="ps-2 py-3 border border-gray-200">ID</div>
          <div className="ps-2 py-3 border border-gray-200">Unit Price</div>
          <div className="ps-2 py-3 border border-gray-200 col-span-4">
            Qty Per Unit
          </div>
        </div>

        {products.map((product, index) => (
          <div
            className={`min-w-full grid grid-cols-12 text-left text-sm ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <React.Fragment key={product.ProductID}>
              <div className="py-3 border border-gray-200 flex justify-center">
                <button
                  className="focus:outline-none text-lg"
                  onClick={() => expandChange(product.ProductID)}
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
              <div className="ps-2 py-3 border border-gray-200 col-span-5">
                {product.ProductName}
              </div>
              <div className="ps-2 py-3 border border-gray-200">
                {product.ProductID}
              </div>
              <div className="ps-2 py-3 border border-gray-200">
                {product.UnitPrice}
              </div>
              <div className="ps-2 py-3 border border-gray-200 col-span-4">
                {product.QuantityPerUnit}
              </div>
              {product.expanded && (
                <div className="col-span-full border border-gray-200 ps-6 py-3">
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
