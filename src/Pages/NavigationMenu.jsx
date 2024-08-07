import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-full flex justify-between">
        <div className="p-4 ">
          <h2 className="text-blue-600 font-bold">MalwareScanner</h2>
        </div>
        <ul className="flex h-full items-center space-x-4">
          <NavLink
            
            className={
              ({ isActive }) => isActive
                ? "bg-blue-600 h-full text-white"
                : ""
            }
            to=""
            end
          >
            <li className="h-full">HomePage</li>
          </NavLink>
          <NavLink to="Home">
            <li>BlackList</li>
          </NavLink>
          <NavLink to="BlackList">
            <li>WhiteList</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
