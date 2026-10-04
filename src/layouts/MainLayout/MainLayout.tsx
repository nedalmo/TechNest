import { Toaster } from "react-hot-toast";
import HeaderTop from "../../components/common/Header/HeaderTop";

import { Outlet } from "react-router-dom";
import Footer from "../../components/common/footer/Footer";
import ScrollTop from "../../components/scrollPage/ScrollTop";
export default function MainLayout() {
  return (
    <div className="  ">
      <Toaster />

      <HeaderTop />
      <ScrollTop />
      <div className="pt-35">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
