import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { logoImage } from "../../images";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const handleToggleMenu = () => {
    const subNavbar = document.querySelector(".subnavbar-overlay");
    if (subNavbar.style.display === "none") {
      subNavbar.style.display = "block";
    } else {
      subNavbar.style.display = "none";
    }
  };

  const handleCloseMenu = () => {
    const overlay = document.querySelector(".subnavbar-overlay");
    if (overlay.style.display === "block") {
      overlay.style.display = "none";
    }
  };

  const handleStopFoam = (e) => {
   e.stopPropagation();
  };

  return (
    <div className="container">
      <header>
        <div className="header-wrap">
          <div className="wrap-img">
            <Link to="/">
              <img src={logoImage.imgLink} className="logo-img" alt="Logo" />
            </Link>
          </div>
          <div className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="/" className="navbar-item_link">
                  home
                </a>
              </li>
              <li className="navbar-item">
                <a href="/products" className="navbar-item_link">
                  our products
                </a>
              </li>
              <li className="navbar-item">
                <a href="/blog" className="navbar-item_link">
                  blog
                </a>
              </li>
              <li className="navbar-item">
                <a href="/about" className="navbar-item_link">
                  about
                </a>
              </li>
              <li className="navbar-item">
                <a href="/contact" className="navbar-item_link">
                  contact
                </a>
              </li>
            </ul>

            <div className="cart">
              <FontAwesomeIcon className="cart-icon" icon={faBagShopping} />
              <p className="cart-btn">CART</p>
              <div className="cart-quantity">
                <p className="cart-quantity_num">4</p>
              </div>
            </div>
          </div>

          {/*  */}

          <FontAwesomeIcon
            onClick={handleToggleMenu}
            className="navbar-menu_icon"
            icon={faBars}
          />
          <div onClick={handleCloseMenu} className="subnavbar-overlay">
            <div onClick={handleStopFoam} className="subnavbar">
              <ul className="subnavbar_list">
                <li className="subnavbar-item">
                  <a href="/" className="subnavbar-item_link">
                    home
                  </a>
                </li>
                <li className="subnavbar-item">
                  <a href="/products" className="subnavbar-item_link">
                    our products
                  </a>
                </li>
                <li className="subnavbar-item">
                  <a href="/blog" className="subnavbar-item_link">
                    blog
                  </a>
                </li>
                <li className="subnavbar-item">
                  <a href="/about" className="subnavbar-item_link">
                    about
                  </a>
                </li>
                <li className="subnavbar-item">
                  <a href="/contact" className="subnavbar-item_link">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
