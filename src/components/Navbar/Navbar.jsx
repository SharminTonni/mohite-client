import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-600 underline" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-600 underline" : ""
          }
          to="/allTasks"
        >
          All Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-600 underline" : ""
          }
          to="/addTask"
        >
          Add Task
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex justify-center mx-auto text-xl font-bold text-rose-500">
          <ul className="lg:flex gap-5">{navlinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
