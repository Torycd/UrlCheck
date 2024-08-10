import { Outlet } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="flex flex-col bg-white w-full min-h-screen">
      <NavigationMenu />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainPage;
