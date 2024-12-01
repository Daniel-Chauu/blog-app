import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FooterCom from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterCom />
    </>
  );
};

export default MainLayout;
