import React from "react";
import "./MainAbout.scss";
import { aboutImage, authorsImage } from "../../images";
import Headline from "../head-line/Headline";
import PageDescription from "../page-description/PageDescription";

const MainAbout = () => {
  const informationPage = {
    pageHeading: "About",
    pageDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    titleHeadline: "",
  };
  return (
    <div>
      <PageDescription
        pageDescription={informationPage.pageDescription}
        pageHeading={informationPage.pageHeading}
        titleHeadline={informationPage.titleHeadline}
      />

      <div className="container">
        <div className="about-head_pic">
          <img src={aboutImage[0].imgLink} alt="no" className="" />
        </div>

        <Headline title="introductions" />

        <div className="about-content">
          <h2 className="about-content_heading">
            Overlaid the jeepers uselessly much excluding everyday life.
          </h2>
          <p className="paragraph">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
        </div>

        <div className="about-list">
          <div className="about-item">
            <div className="about-item_wrap_left">
              <img src={aboutImage[1].imgLink} alt="no" />
            </div>
            <div className="about-item_desc_right">
              <h3 className="about-item_heading">
                Overlaid the jeepers uselessly much excluding everyday life.
              </h3>
              <div className="about-item_line"></div>
              <p className="paragraph">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth. Even the all-powerful Pointing
                has no control about the blind texts it is an almost
                unorthographic life One day however a small line of blind text
                by the name of Lorem Ipsum decided to leave for the far World of
                Grammar.
              </p>
            </div>
          </div>

          <div className="about-item">
            <div className="about-item_wrap_right">
              <img src={aboutImage[2].imgLink} alt="no" />
            </div>

            <div className="about-item_desc_left">
              <h3 className="about-item_heading">
                Overlaid the jeepers uselessly much excluding everyday life.
              </h3>
              <div className="about-item_line"></div>
              <p className="paragraph">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth. Even the all-powerful Pointing
                has no control about the blind texts it is an almost
                unorthographic life One day however a small line of blind text
                by the name of Lorem Ipsum decided to leave for the far World of
                Grammar.
              </p>
            </div>
          </div>
        </div>

        <Headline title="introductions" />

        <div className="list-authors">
          {authorsImage.map((author) => {
            return (
              <div key={author.id} className="author-item">
                <div className="author-img">
                  <img src={author.imgLink} alt={author.name} />
                </div>
                <div className="author-desc">
                  <h4 className="author-name">{author.name}</h4>
                  <p className="author-position">{author.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="transparent"></div>

      <div className="container">
        <Headline title="history timeline" />

        <div className="list-timeline">
          <div className="timeline-item">
            <div className="timeline-num">
              <div>04</div>
              <p className="timeline-date">OCTOBER 2018</p>
            </div>
            <h4 className="time-title">One day however a small line</h4>
            <p className="paragraph">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum.
            </p>
            <div className="timeline-bottom_line"></div>
            <div className="timeline-col_line"></div>
          </div>

          <div className="timeline-item">
            <div className="timeline-num">
              <div>03</div>
              <p className="timeline-date">AUGUST 2018</p>
            </div>
            <h4 className="time-title">Overlaid the jeepers uselessly</h4>
            <p className="paragraph">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum.
            </p>
            <div className="timeline-bottom_line"></div>
            <div className="timeline-col_line"></div>
          </div>

          <div className="timeline-item">
            <div className="timeline-num">
              <div>02</div>
              <p className="timeline-date">JUNE 2018</p>
            </div>
            <h4 className="time-title">Pointing has no control about</h4>
            <p className="paragraph">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum.
            </p>
            <div className="timeline-bottom_line"></div>
            <div className="timeline-col_line"></div>
          </div>

          <div className="timeline-item">
            <div className="timeline-num">
              <div>01</div>
              <p className="timeline-date">NOVEMBER 2017</p>
            </div>
            <h4 className="time-title">We've started CoffeeStyle.</h4>
            <div className="timeline-bottom_line"></div>
            <div className="timeline-col_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
