import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import '/public/css/libs.bundle.css';
import '/public/css/theme.bundle.css'
import '/public/css/customUser.css'
import { Outlet } from "react-router-dom";
function UserPage() {
  return (
    <>
      <Header />
      <div>
        <Outlet/>
      </div>
      <Footer />
    </>
  );
}

export default UserPage;
