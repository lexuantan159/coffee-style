import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ numbersOfItem, item }) => {
  return (
    <>
      <div className={numbersOfItem === 2 ? "item_2" : "item_3"}>
        <div className={numbersOfItem === 2 ? "item-wrap_2" : "item-wrap_3"}>
          <img className="item_img" src={item.imgLink} alt={item.name} />
          {item.sale ? <div className="item-sale">On Sale.</div> : null}
          <Link to="/products">
            <div className="item-overlay"></div>
            <div className="white-btn">EXPLORE MUG</div>
          </Link>
        </div>
        <div className="item-desc">
          <h3 className="item-name">{item.name}</h3>
          {item.sale ? (
            <div className="discount-price">
              <p className="new-price">$ {item.originalPrice}.00</p>
              <p className="old-price">$ {item.discount}.00 USD</p>
            </div>
          ) : (
            <p className="original-price">$ {item.originalPrice}.00 USD</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Item;
