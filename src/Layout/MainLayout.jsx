import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {isLogin || <Navbar />}
      <Outlet />
      {isLogin || <Footer />}
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
