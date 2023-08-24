// products
import redLoveCup from "../images/Red-Love-Cup.jpg";
import blackTeaCup from "../images/Black-Tea-Cup.jpg";
import essentialsMug from "../images/B&W-Essentials-Mug.jpg";
import winterStyleMug from "../images/Winter-Style-Mug.jpg";
import ceramicTea from "../images/Ceramic-Tea.jpg";
import noHandleBarCup from "../images/No-Handle-Bar-Cup.jpg";
import espressoCupByMugs from "../images/Espresso-Cup-by-Mugs.jpg";
import pinkPremiumCeramic from "../images/Pink-Premium-Ceramic.jpg";
import summerDesignerCup from "../images/Summer-Designer-Cup.jpg";
import goldenDesignersMug from "../images/Golden-Designers-Mug.jpg";
import whiteMugEssential from "../images/White-Mug-Essential.jpg";
import whiteCeramic from "../images/White-Ceramic.jpg";
import basicWhiteMug from "../images/Basic-White-Mug.jpg";
import aromaArtCoffeeMug from "../images/Aroma-Art-Coffee-Mug.jpg";
import bluePremiumMug from "../images/Blue-Premium-Mug.jpg";
// background
import backgroundImage_1 from "../images/bg-img-1.jpg";
import backgroundImage_2 from "../images/bg-img-2.jpg";

// banners
import banner_1 from "../images/banner-img.jpg";

// about
import about_1 from "../images/About-Cover.jpg";
import about_2 from "../images/About-Image-1.jpg";
import about_3 from "../images/About-Image-2.jpg";

// authors img
import authors_1 from "../images/Authors-fred.jpg";
import authors_2 from "../images/Authors-isabel.jpg";
import authors_3 from "../images/Authors-maurice.jpg";

// magazine img
import magazine_1 from "../images/magazine-img-1.jpg";
import magazine_2 from "../images/magazine-img-2.jpg";
import magazine_3 from "../images/magazine-img-3.jpg";

// life style img
import lifeStyle_1 from "../images/lifestyle-img-1.jpg";
import lifeStyle_2 from "../images/lifestyle-img-2.jpg";
import lifeStyle_3 from "../images/lifestyle-img-3.jpg";
import lifeStyle_4 from "../images/lifestyle-img-4.jpg";
import lifeStyle_5 from "../images/lifestyle-img-5.jpg";

// office img
import office_1 from "../images/California-Office.jpg";
import office_2 from "../images/London-Office.jpg";

// logo
import logoImg from "../images/Logo.png";

// products
const listProducts = [
  {
    id: 1,
    name: "Red Love Cup",
    imgLink: redLoveCup,
    discount: 25,
    originalPrice: 37,
    sale: true,
    type: "coffee-mugs",
  },
  {
    id: 2,
    name: "Black Tea Cup",
    imgLink: blackTeaCup,
    discount: 15,
    originalPrice: 29,
    sale: true,
    type: "tea-mugs",
  },
  {
    id: 3,
    name: "B&W Essentials Mug",
    imgLink: essentialsMug,
    discount: 0,
    originalPrice: 19,
    sale: false,
    type: "others",
  },
  {
    id: 4,
    name: "Winter Style Mug",
    imgLink: winterStyleMug,
    discount: 0,
    originalPrice: 25,
    sale: false,
    type: "others",
  },
  {
    id: 5,
    name: "Ceramic Tea",
    imgLink: ceramicTea,
    discount: 0,
    originalPrice: 46,
    sale: false,
    type: "tea-mugs",
  },
  {
    id: 6,
    name: "No Handle Bar Cup",
    imgLink: noHandleBarCup,
    discount: 0,
    originalPrice: 34,
    sale: false,
    type: "others",
  },
  {
    id: 7,
    name: "Espresso Cup by Mugs.co",
    imgLink: espressoCupByMugs,
    discount: 0,
    originalPrice: 25,
    sale: false,
    type: "others",
  },
  {
    id: 8,
    name: "Pink Premium Ceramic",
    imgLink: pinkPremiumCeramic,
    discount: 0,
    originalPrice: 99,
    sale: false,
    type: "premium",
  },
  {
    id: 9,
    name: "Summer Designer Cup",
    imgLink: summerDesignerCup,
    discount: 0,
    originalPrice: 29,
    sale: false,
    type: "others",
  },
  {
    id: 10,
    name: "Golden Designers Mug",
    imgLink: goldenDesignersMug,
    discount: 50,
    originalPrice: 69,
    sale: true,
    type: "premium",
  },
  {
    id: 11,
    name: "White Mug Essential",
    imgLink: whiteMugEssential,
    discount: 0,
    originalPrice: 19,
    sale: false,
    type: "others",
  },
  {
    id: 12,
    name: "White Ceramic",
    imgLink: whiteCeramic,
    discount: 0,
    originalPrice: 29,
    sale: false,
    type: "tea-mugs",
  },
  {
    id: 13,
    name: "Basic White Mug",
    imgLink: basicWhiteMug,
    discount: 0,
    originalPrice: 15,
    sale: false,
    type: "coffee-mugs",
  },
  {
    id: 14,
    name: "Aroma Art Coffee Mug",
    imgLink: aromaArtCoffeeMug,
    discount: 0,
    originalPrice: 39,
    sale: false,
    type: "coffee-mugs",
  },
  {
    id: 15,
    name: "Blue Premium Mug",
    imgLink: bluePremiumMug,
    discount: 0,
    originalPrice: 99,
    sale: false,
    type: "premium",
  },
];

// backgrounds

const backgroundImage = [
  {
    id: 1,
    imgLink: backgroundImage_1,
  },
  {
    id: 2,
    imgLink: backgroundImage_2,
  },
];

// banner

const bannerImage = {
  id: 1,
  imgLink: banner_1,
};

// about img

const aboutImage = [
  {
    id: 1,
    imgLink: about_1,
  },
  {
    id: 2,
    imgLink: about_2,
  },
  {
    id: 3,
    imgLink: about_3,
  },
];

// authors img

const authorsImage = [
  {
    id: 1,
    name: "Fred Gleason",
    imgLink: authors_1,
    position: "BRAND OWNER",
  },
  {
    id: 2,
    name: "Isabel Hamill",
    imgLink: authors_2,
    position: "MUG DESIGNER",
  },
  {
    id: 3,
    name: "Maurice Herman",
    imgLink: authors_3,
    position: "MUG DESIGNER",
  },
];

// life style
const lifeStyle = [
  {
    id: 1,
    imgLink: lifeStyle_1,
  },
  {
    id: 2,
    imgLink: lifeStyle_2,
  },
  {
    id: 3,
    imgLink: lifeStyle_3,
  },
  {
    id: 4,
    imgLink: lifeStyle_4,
  },
  {
    id: 5,
    imgLink: lifeStyle_5,
  },
];

//magazines img

const magazinesImage = [
  {
    id: 1,
    imgLink: magazine_1,
  },
  {
    id: 2,
    imgLink: magazine_2,
  },
  {
    id: 3,
    imgLink: magazine_3,
  },
];

const officeImage = [
  {
    imgLink: office_1,
    country: "UNITED STATES",
    address:"9219 Old Kingston Street South </br> El Monte, CA </br> 91733",
    city : "Venice Beach, California",
    openTime: "Mon - Wed 09:00 to 21:00</br>Thu - Sat 09:00 to 22:00</br>Sun - 10:00 to 19:00"
  },
  {
    imgLink: office_2,
    country: "UNITED KINGDOM",
    address:"Jubilee Place </br> London </br> E14 5NY",
    city : "Canary Wharf, London",
    openTime: "Mon - Fri 08:00 to 22:00</br>Sat - 09:00 to 20:00</br>Sun - 12:00 to 18:00"
  }
];

const logoImage = {
  imgLink: logoImg,
};

export {
  listProducts,
  backgroundImage,
  bannerImage,
  aboutImage,
  authorsImage,
  magazinesImage,
  logoImage,
  lifeStyle,
  officeImage
};
