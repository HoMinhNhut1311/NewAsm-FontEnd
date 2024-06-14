import useDynamicCSS from "../Utils/useDynamicCss";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outlet } from "react-router-dom";
function UserPage() {
  useDynamicCSS("/public/css/libs.bundle.css");
  useDynamicCSS("/public/css/theme.bundle.css");
  useDynamicCSS("/public/css/customUser.css");
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default UserPage;
