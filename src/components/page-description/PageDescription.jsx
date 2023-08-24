import React from "react";
import Headline from "../head-line/Headline";
import "./PageDescription.scss"

const PageDescription = ({ pageHeading, pageDescription, titleHeadline }) => {
  return (
    <>
      <div className="header-page_wrap">
        <div className="header-page">
          <div className="container">
            <div className="header-page_intro">
              <h1 className="header-page_heading">{pageHeading}</h1>
              <p className="header-page_desc">{pageDescription}</p>
            </div>

            {
                titleHeadline && <Headline title={titleHeadline} />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDescription;
