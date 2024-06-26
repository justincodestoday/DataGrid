import React from "react";
import logo from "./logo.svg";
import "./App.css";

import products from "./data/products.json";
import Grid from "./components/Grid";

const App = () => {
  return (
    <div className="mx-16">
      <Grid data={products} />
    </div>
  );
};

export default App;
