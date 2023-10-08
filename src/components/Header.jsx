import React, { useState } from "react";
import logo from "../assets/flourish-logo2.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu =()=>{
    setShowMenu (preve => !preve)
  }
  return (
    <header className="fixed shadow-md w-full h-16 px-3 md:px-4 bg-white z-50 ">
      {/* desktop */}

      <div className="flex items-center h-full justify-between ">
        <Link to={""}>
          <div className="h-16 ">
            <img className="h-full p-2" src={logo} alt="" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-2">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg text-yellow-800 hover:text-yellow-700">
            <Link to={"/"}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl cursor-pointer text-yellow-800 hover:text-yellow-700 relative ">
            <BsCart className=""/>
            <div
              className="absolute -top-1 -right-1 text-white bg-pink-800 h-4  text-center w-4 rounded-full m-0
                   p-0 text-sm "
            >
              <p className="-mt-[2px]">0</p>{" "}
            </div>
          </div>
          <div className="text-2xl text-yellow-800 hover:text-yellow-700"onClick={handleShowMenu}>
            <div className="border-2 border-solid text-yellow-800 hover:text-yellow-700 cursor-pointer  p-2 rounded-full text-sm"
            >
              <FaUser />
            </div>

            {showMenu && (
              <div className="absolute right-2 bg-white py-3 px-2 shadow drop-shadow flex flex-col">
                <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer  text-sm">
                  New Product
                </Link>
                <Link to={"login"} className="whitespace-nowrap cursor-pointer text-sm">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
