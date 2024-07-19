import React, { useState } from "react";
import { motion } from "framer-motion";
// import { fadeInOut } from "../animations";

const Input = ({ placeholder, icon, inputState, inputStateFunc, type }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <motion.div
      //   {...fadeInOut}
      className={`flex items-center justify-center gap-4 backdrop-blur-md rounded-md px-4 py-2 border border-red-300 ${
        isFocus ? "shadow-md shadow-red-300" : "shadow-none"
      }`}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full bg-transparent text-white text-lg font-semibold border-none outline-none"
        value={inputState}
        onChange={(e) => inputStateFunc(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};

export default Input;
