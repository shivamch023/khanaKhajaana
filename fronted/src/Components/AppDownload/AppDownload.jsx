import React from "react";
import "./AppDownload.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className="app-download-platform">
        <motion.div whileTap={{ scale: 0.9 }}>
          <a
            href="https://play.google.com/store/games?hl=hi&gl=US"
            target="blank"
          >
            <img src={assets.play_store} alt="" />
          </a>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <a href="https://www.apple.com/in/app-store/" target="blank">
            <img src={assets.app_store} alt="" />
          </a>
        </motion.div>{" "}
      </div>
    </div>
  );
};

export default AppDownload;
