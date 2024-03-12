import { useAppSelector } from "../../../RTKhooks";
import Header from "../header/Header";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import { Outlet } from "react-router-dom";

function StoreFrame() {
  const isOpen = useAppSelector((state) => state.mobileNav.isOpen);
  return (
    <>
      <Header />
      {isOpen && MobileNavbar}
      <Outlet />
    </>
  );
}

export default StoreFrame;
