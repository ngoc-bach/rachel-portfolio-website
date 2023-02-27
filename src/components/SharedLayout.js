import StyledNavbar from "./StyledNavbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
