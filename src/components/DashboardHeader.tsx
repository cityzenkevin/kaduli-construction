/* eslint-disable */
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import Avatar from "../assets/avatar.png";
import Logo from "../assets/logo.png";
import Sidebar from "../layouts/Sidebar";
import ProfileDropdown from "./ProfileDropdown";
import { FaAngleDown } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

function DashHeader() {
  const [showProfileDropdown, setShowprofileDropdown] = useState(false);

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleShowProfileDropdown = () =>
    setShowprofileDropdown(!showProfileDropdown);

  const user = JSON.parse(localStorage.getItem("auth") || "{}");

  return (
    <>
      {showProfileDropdown && (
        <ProfileDropdown
          handleShowProfileDropdown={handleShowProfileDropdown}
        />
      )}
      <div
        className={`h-[11vh] border-b-4 border-b-skyBlue ${
          nav ? "" : ""
        } z-30 w-full lg:w-4/5 lg:ml-[20%] shadow-sm  bg-gray-100  fixed border-b`}
      >
        <div className="px-3 flex items-center  w-full h-full">
          <div className="flex px-5 lg:hidden">
            <div
              onClick={handleClick}
              onKeyDown={handleClick}
              role="button"
              tabIndex={0}
            >
              {!nav ? (
                <HiXMark className="w-7 " />
              ) : (
                <HiBars3 className="w-7 " />
              )}
            </div>
          </div>
          <div className="flex items-center  lg:hidden">
            <Link to="/" className="flex flex-row lg:px-5">
              <img
                className="cursor-pointer w-24  mr-2"
                src={Logo}
                alt="logo"
              />
              <h1 className="text-lg mt-2 font-bold font-lexend text-primary "></h1>
            </Link>
          </div>

          <div
            onClick={handleShowProfileDropdown}
            className="ml-auto mr-10 flex "
          >
            <span className="mr-2 text-lg font-semibold cursor-pointer">
              {user.firstname}
            </span>
            <img
              className="w-8 cursor-pointer mr-auto"
              src={Avatar}
              alt="avatar"
            />
            <FaAngleDown className="mt-[10px] ml-2" />
          </div>
        </div>
        <ul className={!nav ? "hidden" : "bg-white  cursor-pointer lg:hidden"}>
          <Sidebar toggle={handleClick} style="flex" />
        </ul>
      </div>
    </>
  );
}

export default DashHeader;
