import React from "react";
import "./StoryItem.scss";
import { Link } from "react-router-dom";

const StoryItem = ({ numbersOfItem, item }) => {
  return (
    <div  className={numbersOfItem === 2 ? "story-item_2" : "story-item_3"}>
      <div className="story-img">
        <img src={item.imgLink} alt="name" />
        <Link to="/">
          <div className="item-overlay"></div>
          <div className="white-btn">read the full story</div>
        </Link>
      </div>
      <div className="story-desc">
        <a className="story-heading" href="/blogs">
          Health Check: why do I get a headache when I haven’t had my coffee?
        </a>
        <p className="paragraph">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth.
        </p>
        <p className="story-date">OCTOBER 9, 2018</p>
      </div>
    </div>
  );
};

export default StoryItem;
