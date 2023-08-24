import React from "react";
import MainCategory from "../main-category/MainCategory";
import Products from "../products/Products";
import { useParams } from "react-router-dom";
import { listProducts } from "../../images";
const CategoryDetail = () => {
  const categoryItems = [
    {
      id:1,
      name: "coffee-mugs"
    },
    {
      id:2,
      name: "others"
    },
    {
      id:3,
      name: "premium"
    },
    {
      id:4,
      name: "tea-mugs"
    },
    
  ]
  const productItems = [...listProducts];
  const param = useParams();

  function getIdByName(arr, name) {
    const foundItem = arr.find(item => item.name === name);
    return foundItem ? foundItem.id : 0;
  }

  return (
    <>
      <MainCategory idItem={getIdByName(categoryItems, param.categoryId)}/>
      <Products items={productItems} conditionProducts={param.categoryId} />
    </>
  );
};

export default CategoryDetail;
