import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <div className="border-b px-20">
      <div className="w-full h-full flex items-center justify-between py-4">
        <h2 className="text-blue-600 font-extrabold text-2xl">
          MalwareScanner
        </h2>
        <ul className="flex h-full items-center space-x-4 text-[18px] font-bold">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 rounded-md h-full px-5 py-2 text-white"
                : "h-full px-5 py-2 text-black"
            }
            to=""
            end
          >
            <li className="h-full">Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 h-full rounded-md px-5 py-2 text-white"
                : "h-full px-5 py-2 text-black"
            }
            to="List"
          >
            <li>List</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 h-full rounded-md px-5 py-2 text-white"
                : "h-full px-5 py-2 text-black"
            }
            to="Result"
          >
            <li>Results</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 h-full rounded-md px-5 py-2 text-white"
                : "h-full px-5 py-2 text-black"
            }
            to="Doc"
          >
            <li>Doc</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
