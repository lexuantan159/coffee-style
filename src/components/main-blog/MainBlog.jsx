import React from "react";
import "./MainBlog.scss";
import { authorsImage, lifeStyle, logoImage } from "../../images";
import Stories from "../stories/Stories";
import { Link } from "react-router-dom";
import PageDescription from "../page-description/PageDescription";

const MainBlog = () => {
  const itemSelected = (values) => {
    return lifeStyle.filter((item) => values.includes(item.id));
  };

  const informationPage = {
    pageHeading: "Read coffee stories on our Blog",
    pageDescription:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.",
    titleHeadline: "features posts",
  };
  return (
    <>
      <PageDescription
        pageDescription={informationPage.pageDescription}
        pageHeading={informationPage.pageHeading}
        titleHeadline={informationPage.titleHeadline}
      />

      {/* story */}
      <Stories stories={itemSelected([1, 2])} />

      {/* list post */}

      <div className="container">
        <div className="post-wrap">
          <div className="post-latest">
            <div className="wrap-heading">
              <h3 className="post-title">Latest Posts</h3>
            </div>
            <div className="list-posts">
              {lifeStyle.map((item, index) => {
                return (
                  <div key={index} className="post-item">
                    <div className="post-wrap_img">
                      <img className="post-img" src={item.imgLink} alt="name" />
                      <Link to="/">
                        <div className="item-overlay"></div>
                        <div className="white-btn">read the full story</div>
                      </Link>
                    </div>
                    <div className="post-desc">
                      <a href="/blogs" className="post-desc_heading">
                        Recent research suggests that heavy coffee drinkers may
                        reap health benefits.
                      </a>
                      <p className="paragraph">
                        It is a paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <p className="post-desc_date">OCTOBER 9, 2018</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="post-about">
            <div className="post-about">
              <div className="wrap-heading">
                <h3 className="post-title">About Us</h3>
              </div>
              <div className="post-about_wrap">
                <Link to="/">
                  <img
                    className="logo-img"
                    src={logoImage.imgLink}
                    alt="Logo"
                  />
                </Link>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="wrap-link_story">
                  <a href="/about" className="link-story">
                    Read the full Story
                  </a>
                </div>
              </div>
            </div>

            <div className="post-categories_wrap">
              <div className="wrap-heading">
                <h3 className="post-title">About Us</h3>
              </div>
              <div className="post-categories_wrap">
                <div className="post-categories_item">
                  <a href="/" className="categories-item_link">
                    Barista
                  </a>
                </div>
                <div className="post-categories_item">
                  <a href="/" className="categories-item_link">
                    Coffee
                  </a>
                </div>
                <div className="post-categories_item">
                  <a href="/" className="categories-item_link">
                    Lifestyle
                  </a>
                </div>
                <div className="post-categories_item">
                  <a href="/" className="categories-item_link">
                    Mugs
                  </a>
                </div>
              </div>
            </div>

            <div className="post-authors_wrap">
              <div className="wrap-heading">
                <h3 className="post-title">About Us</h3>
              </div>
              <div className="post-authors_wrap">
                {authorsImage.map((author, index) => {
                  return (
                    <div className="post-authors_item">
                      <a href="/" className="authors-item_link">
                        <img
                          className="post-authors_img"
                          src={author.imgLink}
                          alt={author.name}
                        />

                        <div>{author.name}</div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="blog-slogan_wrap ">
          <div className="blog-slogan">
            "I wake up some mornings and sit and have my coffee and look out at
            my beautiful garden, and I go, ’Remember how good this is. Because
            you can lose it."
          </div>
          <div className="blog-slogan_desc">
            jason jonhson - owner of coffeestyle
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBlog;
