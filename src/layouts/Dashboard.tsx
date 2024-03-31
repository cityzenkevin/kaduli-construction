import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "./Sidebar";

export default function DashboardLayout (){
  const [nav, setNav] = React.useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <Sidebar toggle={handleClick} style="hidden lg:flex" />
      <div className="flex flex-col flex-grow md:ml-28">
        <Outlet />
      </div>
    </div>
  );
};

