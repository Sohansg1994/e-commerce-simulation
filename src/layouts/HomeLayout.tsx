import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import TopBar from "../components/topBar/TopBar";
import CategoryBar from "../components/categoryBar/CategoryBar";


export default function HomeLayout() {
  return (
    <>
    <div className="flex bg-white h-screen overflow-auto">
      <div className=" w-full  flex flex-col lg:pb-25">
        <Header  />
        <TopBar/>
        <CategoryBar/>
        <div className="max-w-screen-xl mx-auto w-full  ">
          <Outlet />
        </div>
      </div>
    </div>
  </>
  )
}
