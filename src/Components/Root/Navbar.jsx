import React from "react";
import { NavLink } from "react-router"; 
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navLinks = (
    <>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <NavLink 
          to="/" 
          className='hover:text-orange-500 transition-colors'>
          Home
        </NavLink>
      </motion.li>
      {user && (
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <NavLink 
            to="/dashboard"
            className={({ isActive }) => 
              `hover:text-orange-500 transition-colors ${isActive ? "text-orange-600 font-bold" : ""}`
            }
          >
            Dashboard
          </NavLink>
        </motion.li>
      )}
      {user && (
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <NavLink 
            to="/donate"
            className={({ isActive }) => 
              `hover:text-orange-500 transition-colors ${isActive ? "text-orange-600 font-bold" : ""}`
            }
          >
            Donate
          </NavLink>
        </motion.li>
      )}
    </>
  );

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }} 
      className=" bg-[#FFF8F1]"
    >
     <div className="p-4 max-w-7xl mx-auto">
        <div className="navbar bg-base-100/80 backdrop-blur-md shadow-sm border border-orange-100 rounded-2xl px-4 lg:px-8">
        
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">Share Circle</span>
          </motion.div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {user ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={logOut}
              className="btn bg-orange-500 hover:bg-orange-600 border-none text-white btn-sm sm:btn-md rounded-lg px-6 normal-case shadow-md cursor-pointer"
            >
              Logout
            </motion.div>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink to="/login" className="btn btn-ghost btn-sm sm:btn-md normal-case font-semibold">
                  Login
                </NavLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink to="/signup" className="btn bg-orange-500 hover:bg-orange-600 border-none text-white btn-sm sm:btn-md rounded-lg px-6 normal-case shadow-md">
                  Sign Up
                </NavLink>
              </motion.div>
            </>
          )}
        </div>
      </div>
     </div>
    </motion.div>
  );
};

export default Navbar;