import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";

import firebaseContext from "../state/firebase/firebaseContext.js";
import homeContext from "../state/Home/homeContext.js";
import Loginpopup from "./Loginpopup.jsx";

const Header = () => {
  const navigate = useNavigate();

  const { user } = useContext(homeContext);

  return (
    <div className="flex justify-between items-center w-full p-5 px-24 bg-none text-white fixed">
      <div className="flex flex-row justify-center items-center gap-3 p-3 px-4 text-3xl tracking-widest font-jockeyone">
        <p>UTUBE</p>
        <div>
          <IoLogoYoutube />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-8 p-3 px-4 text-2xl">
        {!user ? (
          <motion.button className="px-5" onClick={() => navigate("/login")}>
            LOG IN
          </motion.button>
        ) : (
          <Loginpopup />
        )}
      </div>
    </div>
  );
};

export default Header;
