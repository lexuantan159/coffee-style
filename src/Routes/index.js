
import CategoryDetail from "../components/category-detail/CategoryDetail.jsx";
import { Home, About, Products, Contact, Blog } from "../pages/index.js";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/products", component: Products },
  { path: "/contact", component: Contact },
  { path: "/blog", component: Blog },
  { path: "/category/:categoryId", component: CategoryDetail },
  
];

const privateRoutes = [];

const categoryRoutes = [];

export { publicRoutes, privateRoutes, categoryRoutes };
