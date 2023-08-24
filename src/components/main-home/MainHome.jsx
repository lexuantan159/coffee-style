import React from "react";
import "./MainHome.scss";
import {
  bannerImage,
  lifeStyle,
  magazinesImage,
  listProducts,
} from "../../images/index.js";
import { contents } from "../../contents/index";
import Headline from "../head-line/Headline";
import Products from "../products/Products";
import { Link } from "react-router-dom";
import Stories from "../stories/Stories";

const MainHome = () => {
  
  const itemSelected = (values) => {
    return listProducts.filter((item) => values.includes(item.id));
  };

  const itemSelectedLifeStyle = (values) => {
    return lifeStyle.filter((item) => values.includes(item.id));
  };
 
  return (
    <>
      {/* banner */}
      <div className="banner">
        <img src={bannerImage.imgLink} className="banner-img" alt="Banner" />
        <div className="banner-desc">
          <p className="banner-desc_sentence">BEST PLACE TO BUY DESIGN</p>
          <h1 className="banner-desc_heading">Coffee Mugs</h1>
          <p className="banner-desc_sub-desc">
            The most versatile furniture system ever created. Designed to fit
            your life, made to move and grow.
          </p>
          <div className="btn-wrap">
            <a href="/products" className="btn">
              EXPLORE OUR PRODUCTS
            </a>
          </div>
        </div>
      </div>

      {/* contents  */}
      <div className="container">
        <div className="content">
          <h2 className="content-heading">{contents.heading}</h2>
          <p className="content-desc">{contents.describe}</p>

          <div className="wrap-link_story">
            <a href="/about" className="link-story">
              Read the full Story
            </a>
          </div>
        </div>
      </div>

      {/*  feature-items  */}

      <div className="container">
        <Headline title="feature mugs" />
        <Products items={itemSelected([7, 9])} />
      </div>

      {/* list products */}

      <div className="container">
        <Headline title="more products" />
        <Products items={itemSelected([1, 2, 3, 4, 5, 6, 7, 8, 9])} />
      </div>

      {/*  */}

      <div className="container">
        <Headline title="buy 2 mugs and get a coffee magazine free" />
        <div className="magazine">
          <div className="magazine-img">
            <img
              className="magazine-main_img"
              src={magazinesImage[0].imgLink}
              alt=""
            />
            <div className="magazine-img_wrap">
              <img
                className="magazine-sub_img"
                src={magazinesImage[1].imgLink}
                alt=""
              />
              <img
                className="magazine-sub_img"
                src={magazinesImage[2].imgLink}
                alt=""
              />
            </div>
          </div>
          <div className="magazine-content">
            <p className="magazine-content_headline">PREMIUM OFFER</p>
            <h1 className="magazine-content_heading">
              Get our Coffee Magazine
            </h1>
            <p className="magazine-content_subheading">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </p>
            <Link to="/products">
              <button className="black-btn">start shopping</button>
            </Link>
          </div>
        </div>
      </div>

      {/* transparent */}

      <div className="transparent"></div>

      {/* story */}

      <div className="container">
        <Headline title="behind the mugs, lifestyle stories" />
        <Stories stories={itemSelectedLifeStyle([1,2,3])}/>
      </div>
    </>
  );
};

export default MainHome;
