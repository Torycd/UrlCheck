import { Outlet } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

const MainPage = () => {
  return (
    <div className="bg-white h-screen w-[100%]">      
        <NavigationMenu />
      <div>{Outlet}</div>
    </div>
  );
};

export default MainPage;
