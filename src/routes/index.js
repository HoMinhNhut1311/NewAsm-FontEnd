import Home from "../Home";
import AdminPage from "../Admin/AdminPage";
import Login from "../Account/Login/Login";
import PageNotFound from "./NotFound/PageNotFound";
import AdminHome from "../Admin/Home/AdminHome";
import UserOverView from "../Admin/User/UserOverView";
import UserSearch from "../Admin/User/UserSearch";
import UserDetail from "../Admin/User/UserDetail";
import ProductOverView from "../Admin/Product/ProductOverView";
import UserPage from "../User/UserPage";
import About from "../User/About/About";
import Blog from "../User/Blog/Blog";
import HomePage from "../User/Home/HomePage";
import Shop from "../User/Shop/Shop";
import DetailProduct from "../User/Shop/DetailProduct";
import Checkout from "../User/Checkout/Checkout";

// Public Route
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/user", component: UserPage },
];

// Private Route
const privateRoutes = [
  {
    path: "/admin",
    component: AdminPage,
    childrenRoute: [
      {
        path: "",
        component: AdminHome,
      },
      {
        path: "user",
        childrenRoute: [
          {
            path: "overview",
            component: UserOverView,
          },
          {
            path: "search",
            component: UserSearch,
          },
          {
            path: "detail/:idUser",
            component: UserDetail,
          },
        ],
      },
      {
        path: "product",
        childrenRoute: [
          {
            path: "overview",
            component: ProductOverView,
          },
          {
            path: "search",
            component: UserSearch,
          },
          {
            path: "detail/:idUser",
            component: UserDetail,
          },
        ],
      },
    ],
  },
  {
    path: "/user",
    component: UserPage,
    childrenRoute: [
      {
        path: "",
        component: HomePage,
      },
      {
        path: "about",
        component: About,
      },
      {
        path: "blog",
        component: Blog,
      },
      {
        path: "shop",
        childrenRoute:[
          {
            path: "",
            component: Shop,
          },
          {
            path: "furniture/:productId",
            component: DetailProduct
          }
        ]
      },
      {
        path: "checkout",
        component: Checkout
      },
    ],
  },
];

// Page not Found
const notFoundRoutes = [
  {
    path: "*",
    component: PageNotFound,
  },
];

export { publicRoutes, privateRoutes };
