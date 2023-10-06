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
    <header className="fixed shadow-md w-full h-16 px-3 md:px-4">
      {/* desktop */}

      <div className="flex items-center h-full justify-between ">
        <Link to={""}>
          <div className="h-16 ">
            <img className="h-full p-2" src={logo} alt="" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-2">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-slate-600 relative ">
            <BsCart />
            <div
              className="absolute -top-2 -right-1 text-white bg-pink-800 h-4  text-center w-4 rounded-full m-0
                   p-0 text-sm "
            >
              0{" "}
            </div>
          </div>
          <div className="text-2xl text-slate-600 "onClick={handleShowMenu}>
            <div className="border-2 border-solid border-slate-700 cursor-pointer  p-2 rounded-full text-sm"
            >
              <FaUser />
            </div>

            {showMenu && (
              <div className="absolute right-2 bg-white py-3 px-2 shadow drop-shadow ">
                <p className="whitespace-nowrap cursor-pointer  text-sm">
                  New Product
                </p>
                <p className="whitespace-nowrap cursor-pointer text-sm">
                  Login
                </p>
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
