import { Outlet } from "react-router-dom"
import NavigationMenu from "./NavigationMenu"

const MainPage = () => {
  return (
    <div className="bg-white h-screen w-[100%]">
        <div className="m-2 rounded-sm border shadow-[0_5px_5px_rgba(200,200,200,0.5)]"><NavigationMenu/></div>
        <div>{Outlet}</div>
    </div>
  )
}

export default MainPage

