import React from "react";
import logo from "./logo.svg";
import "./App.css";

import products from "./data/products.json";
import Grid from "./components/Grid";

const App = () => {
  return (
    <>
      <div className="mx-20 my-4">
        <h1 className="text-3xl font-bold">My Data Grid</h1>
      </div>
      <Grid data={products} />
    </>
  );
};

export default App;
