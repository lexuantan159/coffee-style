import React from "react";
import Item from "./items/Item";
import "./Products.scss";

const Products = ({ items, conditionProducts = "" }) => {
  const length = items.length;
  var products = [];
  if (conditionProducts === "") {
    products = items;
  } else {
    products = items.filter((item) => {
      return item.type === conditionProducts;
    });
  }

  return (
    <div className="container">
      <div className={length === 2 ? "products-grid_2" : "products-grid"}>
        {products.map((product, index) => {
          return (
            <Item key={index} numbersOfItem={products.length} item={product} />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
