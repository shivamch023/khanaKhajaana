import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom';
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home"); 

  const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
       <Link to='/'> <motion.li whileTap={{scale: 0.8}} onClick={()=>setMenu('home')} className={menu === "home" ? "active" : ""}>Home</motion.li></Link>
      <motion.a href="#explore-menu" whileTap={{scale: 0.8}}  onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</motion.a>
        <motion.a href="#app-download" whileTap={{scale: 0.8}}  onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-App</motion.a>
        <motion.a href="#footer" whileTap={{scale: 0.8}}  onClick={()=>setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>Contact us</motion.a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":'dot'}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
