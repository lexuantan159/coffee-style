import React from "react";
import { logoImage } from "../../images";
import { Link } from "react-router-dom";
import "./Footer.scss"

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="footer-col">
            <div className="footer-img">
              <Link to="/">
                <img src={logoImage.imgLink} className="logo-img" alt="Logo" />
              </Link>
            </div>
            <p className="footer-desc">
              Delivering the best coffee life since 1996. From coffee geeks to
              the real ones.
            </p>
            <p className="footer-create">CoffeeStyle Inc. © 2023</p>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">menu</h3>
            <ul className="footer-items">
              <li className="footer-item">
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li className="footer-item">
                <a href="/products" className="footer-link">
                  Our Products
                </a>
              </li>
              <li className="footer-item">
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li className="footer-item">
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
              <li className="footer-item">
                <a href="/" className="footer-link">
                  Styleguide
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">follow us</h3>
            <ul className="footer-items">
              <li className="footer-item">
                <a href="/" className="footer-link">
                  Facebook
                </a>
              </li>
              <li className="footer-item">
                <a href="/products" className="footer-link">
                  Instagram
                </a>
              </li>
              <li className="footer-item">
                <a href="/about" className="footer-link">
                  Pinterest
                </a>
              </li>
              <li className="footer-item">
                <a href="/contact" className="footer-link">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">contact us</h3>
            <p className="footer-desc">We’re Always Happy to Help</p>
            <h4 className="footer-email">us@coffeestyle.io</h4>
            <p className="footer-create">Powered by Webflow</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
