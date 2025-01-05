import { FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navber() {
  const [velu, setVelu] = useState(true);

  return (
    <>
      <nav className="w-11/12 mx-auto border-b-2 sticky top-0 z-30 bg-black text-white items-center py-3 font-semibold flex justify-between">
        <h1 className="text-3xl">
          MR.<span className="text-orange-600">coder</span>
        </h1>
        <ul className="hidden sm:flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold p-2 bg-orange-600 rounded-md text-white"
                  : "font-bold p-2 hover:bg-orange-600 rounded-md duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold p-2 bg-orange-600 rounded-md text-white"
                  : "font-bold p-2 hover:bg-orange-600 rounded-md duration-300"
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://docs.google.com/document/d/1RbeBl3wMITRuYtjS_HIMr2EQk_oYywFsUOnnhyLVYC8/edit?tab=t.0"
              className={({ isActive }) =>
                isActive
                  ? "font-bold p-2 bg-orange-600 rounded-md text-white"
                  : "font-bold p-2 hover:bg-orange-600 rounded-md duration-300"
              }
            >
              Resumi
            </NavLink>
          </li>
        </ul>
        {velu ? (
          <h1
            onClick={() => setVelu(!velu)}
            className="block sm:hidden text-2xl"
          >
            <TiThMenu />
          </h1>
        ) : (
          <h1
            onClick={() => setVelu(!velu)}
            className="block sm:hidden text-2xl"
          >
            <MdRestaurantMenu />
          </h1>
        )}

        <ul
          className={`absolute z-20 right-0 top-[54px] px-3 duration-300 ${
            velu ? "scale-0" : "scale-100"
          } sm:scale-0 bg-emerald-300 py-2 flex flex-col gap-8`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold p-2 bg-orange-600 rounded-md text-white"
                  : "font-bold p-2 hover:bg-orange-600 rounded-md duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold p-2 bg-orange-600 rounded-md text-white"
                  : "font-bold p-2 hover:bg-orange-600 rounded-md duration-300"
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resumi"
              className={({ isActive }) =>
                isActive
                  ? "font-bold p-2 bg-orange-600 rounded-md text-white"
                  : "font-bold p-2 hover:bg-orange-600 rounded-md duration-300"
              }
            >
              Resumi
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navber;
