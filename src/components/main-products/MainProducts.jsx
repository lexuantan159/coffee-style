import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { lifeStyle, listProducts } from "../../images";
import Products from "../products/Products";
import "./MainProducts.scss";

const MainProducts = () => {
  const productItems = [...listProducts]
  const storyItems = [lifeStyle[0], lifeStyle[2]];

  const handleScrollLeft = () => {
    const previousScroll = document.querySelector(".slides" );

    previousScroll.scrollLeft -= 940;
  };

  const handleScrollRight = () => {
    const nextScroll = document.querySelector(".slides" );

    nextScroll.scrollLeft += 940;
  };



  return (
    <>
    <div className="container">
      
      <div className="slider">
      <FontAwesomeIcon onClick = {handleScrollLeft}  className = "scroll-prev slide-icon"  icon={faChevronLeft} />
        <div className="slides">
          {storyItems.map((storyItem, index) => {
            return (
              <div key={index} className="slide-item">
                <div className="slide-wrap">
                  <img className="slide-img" src={storyItem.imgLink} alt="no" />
                  <Link to="/products">
                    <div className="item-overlay"></div>
                    <div className="white-btn">Read the full story</div>
                  </Link>
                </div>
                <div className="slide-content">
                  <p className="slide-content_headline">PREMIUM OFFER</p>
                  <h1 className="slide-content_heading">
                    Get our Coffee Magazine
                  </h1>
                  <p className="slide-content_subheading">
                    The most versatile furniture system ever created. Designed
                    to fit your life.
                  </p>
                  <Link to="/products">
                    <button className="black-btn">start shopping</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <FontAwesomeIcon onClick = {handleScrollRight} className = "scroll-next slide-icon"  icon={faChevronRight} />
      </div>
    </div>

    <div className="container">
          <Products items = {productItems}/>
    </div>
    </>
  );
};

export default MainProducts;
