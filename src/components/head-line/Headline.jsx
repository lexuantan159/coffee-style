import React from "react";
import './Headline.scss'

const Headline = ({colorChange = false ,title}) => {
  return (
    <>
      <div className="headline-wrap">
        <div className="line-before"></div>
        <p  className={colorChange ? "headlineWhite" : "headline"} >{title}</p>
        <div className="line-after"></div>
      </div>
    </>
  );
};

export default Headline;
