import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "./MainCategory.scss";
import { categoryItems } from "../../contents";
const MainCategory = ({idItem}) => {
  const [category, setCategory] = useState(idItem || 0);
  const handleChangeTab = (id) => {
    console.log("1: ", id);
    setCategory(id);
  };

  return (
    <div className="container">
      <div className="category">
        <h1 className="category-heading">{categoryItems[category].heading}</h1>
        <p className="category-desc">{categoryItems[category].describe}</p>
      </div>
      <div className="category-nav">
        <div className="category-line"></div>
        <ul className="category-list">
          {categoryItems.map((item) => (
            <li className="category-item" key={item.id}>
              <Link to = {item.path}>
                <button
                  onClick={() => handleChangeTab(item.id)}
                  className={
                    item.id === category
                      ? "category-item_link active"
                      : "category-item_link"
                  }
                >
                  {item.heading}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="category-line"></div>
      </div>
    </div>
  );
};

export default MainCategory;
