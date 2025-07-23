import React, { useState } from "react";
import Style from "./navbar.module.css";
import logo from "../../assets/logo.png";
import navIcon from "../../assets/nav.png";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
const [nav, setNav] = useState(false);
const show =()=>{
    setNav(true);
};
const hide =()=>{
    setNav(false);
}

console.log(nav);



  return (
    <div className={Style.navCon}>
      {/* Web view na */}
      <nav>
        <div className={Style.logo}>
          <img src={logo} alt="" />
          <p>Sage Investment</p>
        </div>
        <div className={Style.navItems}>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
          </ul>
          <button>Hire Us</button>
          <img className={Style.navIcon} src={navIcon} alt=""  onClick={show}/>
        </div>
      </nav>

      {/* Mobile view */}

      <nav className={`${Style.mobileNav} ${nav ? Style.show : Style.hide}`}>
        <div className={Style.closeIcon}>
            <IoClose className={Style.IoClose} onClick={hide} />
        </div>
          
        <div className={Style.navItems2}>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
          </ul>
          <button>Hire Us</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
