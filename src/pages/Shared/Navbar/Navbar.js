import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../asserts/images/logo.png";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./Navbar.css";
import { AuthContext } from "../../../context/UserContext";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const userSignOut = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar flex justify-between bg-base-100 shadow-lg py-5 lg:px-20 md:px-12 sm:px-8 px-6">
      <div className="lg:navbar-start ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3  hover:text-[#ab1818] bg-transparent`
                    : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8 mr-3 bg-transparent`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3 hover:text-[#ab1818] bg-transparent`
                    : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8 mr-3 bg-transparent`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3 hover:text-[#ab1818] bg-transparent`
                    : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8 mr-3 bg-transparent`
                }
              >
                Blog
              </NavLink>
            </li>
            {user?.email && (
              <>
                <li>
                  <NavLink
                    to="/myReview"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3 hover:text-[#ab1818] bg-transparent`
                        : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8 mr-3 bg-transparent`
                    }
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addService"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3 hover:text-[#ab1818] bg-transparent`
                        : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8  mr-3 bg-transparent`
                    }
                  >
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <p className="bg-transparent text-[#ab1818]">
                    {user?.displayName}
                  </p>
                </li>
              </>
            )}
            {user?.email ? (
              <>
                <button
                  onClick={userSignOut}
                  className="border  px-8 text-base py-3 font-medium border-[#ab1818] rounded-full bg-[#ab1818] hover:bg-[#9c1616] text-white"
                >
                  <span className="flex items-center gap-2">
                    <span> Logout</span> |
                    <AiOutlineDoubleRight />
                  </span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="border  px-8 text-base py-3 font-medium border-[#ab1818] rounded-full bg-[#ab1818] hover:bg-[#9c1616] text-white"
                >
                  <span className="flex items-center gap-2">
                    <span> Login</span> |
                    <AiOutlineDoubleRight />
                  </span>
                </Link>
              </>
            )}
          </ul>
        </div>
        <Link className="lg:text-2xl  font-medium">
          <div className="flex items-center gap-1">
            <img src={logo} alt="" />
            <span className="font-text">Flash Photography</span>
            <span className="font-text text-[#ab1818]"> Point</span>
          </div>
        </Link>
      </div>
      <div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-[#1e2427] ">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3  hover:text-[#ab1818] bg-transparent`
                    : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8 mr-3 bg-transparent`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3 hover:text-[#ab1818] bg-transparent`
                    : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8 mr-3 bg-transparent`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3 hover:text-[#ab1818] bg-transparent`
                    : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8 mr-3 bg-transparent`
                }
              >
                Blog
              </NavLink>
            </li>
            {user?.email && (
              <>
                <li>
                  <NavLink
                    to="/myReview"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3 hover:text-[#ab1818] bg-transparent`
                        : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8 mr-3 bg-transparent`
                    }
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addService"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#ab1818] font-medium underline underline-offset-8 mr-3 hover:text-[#ab1818] bg-transparent`
                        : `hover:text-[#ab1818] font-medium hover:underline hover:underline-offset-8  mr-3 bg-transparent`
                    }
                  >
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <p className="bg-transparent text-[#ab1818]">
                    {user?.displayName}
                  </p>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className=" hidden lg:flex lg:w-1/3">
          {user?.email ? (
            <>
              <button
                onClick={userSignOut}
                className="border  px-8 text-base py-3 font-medium border-[#ab1818] rounded-full bg-[#ab1818] hover:bg-[#9c1616] text-white"
              >
                <span className="flex items-center gap-2">
                  <span> Logout</span> |
                  <AiOutlineDoubleRight />
                </span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border  px-8 text-base py-3 font-medium border-[#ab1818] rounded-full bg-[#ab1818] hover:bg-[#9c1616] text-white"
              >
                <span className="flex items-center gap-2">
                  <span> Login</span> |
                  <AiOutlineDoubleRight />
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
