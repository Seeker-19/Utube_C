import React, { useContext } from "react";
import homeContext from "../state/Home/homeContext.js";
import Header from "./Header.jsx";


const Main = () => {
  const { mainStyle } = useContext(homeContext);

  return (
    <div className="h-screen w-screen" style={mainStyle}>
        <Header/>
      <div className="flex justify-center items-center p-5  m-auto text-8xl text-gray-300 h-screen w-screen">
        <p className="text-white tracking-widest font-jockeyone">
          Explore Videos
        </p>
      </div>
    </div>
  );
};

export default Main;
