import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { FaChartPie } from "react-icons/fa";
import {
  HiBuildingOffice,
  HiCog,
  HiCurrencyDollar,
  HiUsers,
} from "react-icons/hi2";

import Logo from "../assets/logo.png";

import Tooltip from "../components/ToolTip";
import { UserContext } from "../hooks/useAuth";
import SideNavLink from "../components/SideNavLink";
import { FaPowerOff } from "react-icons/fa6";
import { AiOutlineDeleteColumn } from "react-icons/ai";
import CheckRole from "../utils/checkRoles";

function Sidebar({ style, toggle }: { style: string; toggle: () => void }) {
  const { logout } = useContext(UserContext);

  return (
    <div
      className={`${style} transition ease-in-out duration-100 flex-col shadow-sm fixed h-[100%] w-1/3 md:w-1/5
       bg-light-bg border-r overflow-y-scroll no-scrollbar z-20`}
    >
      <div className="hidden fixed z-10 pt-[v3h] lg:flex items-center bg-light-bg ml-4  lg:w-full">
        <span className="flex flex-row lg:px-5">
          <img className="cursor-pointer w-20 mr-2" src={Logo} alt="logo" />
          <h1 className="text-lg mt-2 font-bold font-lexend text-primary dark:text-dark-text-fill"></h1>
        </span>
      </div>
      <div className="list-none mt-16 pl-4 ">
        <div className="text-base  italic py-3 font-semibold text-[#8094ae] flex ">
          <span className=""> Overview </span>
        </div>
        <SideNavLink
          onClick={toggle}
          name="Overview"
          end={true}
          to="/dashboard"
        >
          <FaChartPie className="w-5 mt-1" />
        </SideNavLink>
        <div className="text-base  italic py-3 font-semibold text-[#8094ae] flex ">
          <span className=""> Application </span>
        </div>
        <CheckRole roles={["ADMIN", "CORRESPONDENT", "ORGANIZATION"]}>
          <SideNavLink
            onClick={toggle}
            name="Projects"
            to="/dashboard/projects"
          >
            <HiUsers className="w-5 mt-1" />
          </SideNavLink>
        </CheckRole>

        <CheckRole roles={["ADMIN", "ORGANIZATION"]}>
          <SideNavLink
            onClick={toggle}
            name="Donations"
            to="/dashboard/funds"
            end={false}
            roles={['ADMIN']}
            submenu={[
              { to: "/dashboard/funds/mobile", name: "Mobile Transfers" },
              { to: "/dashboard/funds/bank", name: "Bank Transfer" },
            ]}
          >
            <HiCurrencyDollar className="w-5 mt-1 " />
          </SideNavLink>
        </CheckRole>
        <CheckRole roles={["ADMIN"]}>
          <SideNavLink
            onClick={toggle}
            name="Correspondents"
            to="/dashboard/correspondents"
            end={true}
          >
            <AiOutlineDeleteColumn className="w-5 h-6 mt-1 " />
          </SideNavLink>

          {/* Admin */}

          <SideNavLink
            onClick={toggle}
            name="Organizations"
            to="/dashboard/organization"
            end={true}
          >
            <HiBuildingOffice className="w-5 h-6 mt-1 " />
          </SideNavLink>
        </CheckRole>
        {/* Shared Links */}
        <SideNavLink onClick={toggle} name="Settings" to="/dashboard/settings">
          <HiCog className="w-5 mt-1 " />
        </SideNavLink>
      </div>
      <hr className="mt-auto  mb-0" />
      <div className="flex pt-4 flex-row ml-10  mb-10 list-none z-0">
        <li className="px-2">
          <NavLink to="#link">
            <Tooltip message="Logout">
              <FaPowerOff
                onClick={logout}
                className="w-5 text-red-700 dark:text-red-600 hover:text-red-900"
              />
            </Tooltip>
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
