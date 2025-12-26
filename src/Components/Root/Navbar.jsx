import React from "react";
import { NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user,logOut} = useAuth();
  const NavLinks = (
    <>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div
              onClick={() => {
                logOut();
              }}
              className="px-4 py-3 hover:bg-red-50 text-red-600 transition font-medium cursor-pointer"
            >
              Logout
            </div>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-outline btn-sm mr-2">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn btn-primary btn-sm">
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
