import React from "react";
import PageDescription from "../page-description/PageDescription";
import { officeImage } from "../../images";
import "./MainContact.scss";
import Headline from "../head-line/Headline";

const MainContact = () => {
  const informationPage = {
    pageHeading: "Let's Connect",
    pageDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.",
    titleHeadline: "our offices",
  };
  return (
    <div>
      <PageDescription
        pageDescription={informationPage.pageDescription}
        pageHeading={informationPage.pageHeading}
        titleHeadline={informationPage.titleHeadline}
      />

      <div className="container">
        <div className="offices-wrap">
          <div className="office-item">
            <div className="office-img">
              <img src={officeImage[0].imgLink} alt={officeImage[0].country} />
            </div>
            <div className="office-desc">
              <p className="office-heading">{officeImage[0].country}</p>
              <h4 className="office-city">{officeImage[0].city}</h4>
              <ul className="office-address_list">
                <li className="paragraph">Jubilee Place</li>
                <li className="paragraph">London</li>
                <li className="paragraph">E14 5NY</li>
              </ul>
              <p className="office-heading">{officeImage[0].country}</p>

              <ul className="office-times">
                <li className="paragraph">Mon - Fri 08:00 to 22:00</li>
                <li className="paragraph">Sat - 09:00 to 20:00</li>
                <li className="paragraph">Sun - 12:00 to 18:00</li>
              </ul>
            </div>
          </div>

          <div className="office-item">
            <div className="office-img">
              <img src={officeImage[1].imgLink} alt={officeImage[1].country} />
            </div>
            <div className="office-desc">
              <p className="office-heading">{officeImage[1].country}</p>
              <h4 className="office-city">{officeImage[1].city}</h4>
              <ul className="office-address_list">
                <li className="paragraph">Jubilee Place</li>
                <li className="paragraph">London</li>
                <li className="paragraph">E14 5NY</li>
              </ul>
              <p className="office-heading">{officeImage[0].country}</p>

              <ul className="office-times">
                <li className="paragraph">Mon - Fri 08:00 to 22:00</li>
                <li className="paragraph">Sat - 09:00 to 20:00</li>
                <li className="paragraph">Sun - 12:00 to 18:00</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-col_input">
            <h3 className="form-heading label">contact form</h3>
            <p className="form-slogan">
              Drop us your message and I'll get back to you as soon as possible.
            </p>
            <form require >
              <div className="contact-form_wrap">
                <label htmlFor="" className="label form-label">
                  name
                </label>
                <input
                  type="text"
                  placeholder="james coffee"
                  className="contact-form_input"
                />
              </div>
              <div className="contact-form_wrap">
                <label htmlFor="" className="label form-label">
                  email address
                </label>
                <input
                  type="email"
                  placeholder="customer@coffeestyle.io"
                  className="contact-form_input"
                />
              </div>
              <div className="contact-form_wrap">
                <label htmlFor="" className="label form-label">
                  your message
                </label>
                <input
                  type="text"
                  placeholder="hi! would like to ask something about mugs."
                  className="contact-form_input"
                />
              </div>
              <button className="black-btn">send message</button>
            </form>
          </div>

          <div className="form-col_info">
            <h3 className="form-heading label">contact form</h3>
            <p className="form-slogan">CoffeeStyle. Inc</p>
            <ul className="form-list_address">
              <li className="paragraph">Pride Ave,</li>
              <li className="paragraph">Hamlyn Heights</li>
              <li className="paragraph">VIC 3215</li>
              <li className="paragraph">Australia</li>
            </ul>

            <div className="contact-form_info">
              <p className="label contact-heading">call us</p>
              <a href="/" className="contact-num_link">
                +1 (415) 555-1212
              </a>
            </div>

            <p className="label contact-heading">email us</p>
            <a href="/" className="contact-email_link">
              us@coffeestyle.io
            </a>
          </div>
        </div>

        <Headline title="directory" />

        <div className="list-directory">
          <div className="directory-row">
            <div className="directory-col">
              <p className="label">press</p>
            </div>
            <div className="directory-col">
              <p className="directory-col_local">Robb Kohler</p>
            </div>

            <div className="directory-col">
              <p className="paragraph">531-403-0376</p>
              <p className="paragraph">warren.marsh@coffeestyle.com</p>
            </div>
          </div>
          <div className="directory-row">
            <div className="directory-col">
              <p className="label">support</p>
            </div>

            <div className="directory-col">
              <p className="directory-col_local">Roob Dayana</p>
            </div>

            <div className="directory-col">
              <p className="paragraph">086-374-4962</p>
              <p className="paragraph">robb.kohler@coffeestyle.com</p>
            </div>
          </div>
          <div className="directory-row">
            <div className="directory-col">
              <p className="label">management</p>
            </div>
            <div className="directory-col">
              <p className="directory-col_local">Warren Marsh</p>
            </div>
            <div className="directory-col">
              <p className="paragraph">354-341-2750</p>
              <p className="paragraph">roob.dayana@coffeestyle.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="google-map"></div>
    </div>
  );
};

export default MainContact;
