import React from "react";
import logo from "./logo.svg";
import "./App.css";

import products from "./data/products.json";
import Grid from "./components/Grid";

const App = () => {
  return (
    <div className="mx-16 my-4">
      <h1 className="text-3xl font-bold mb-4">My Data Grid</h1>
      <Grid data={products} />
    </div>
  );
};

export default App;
