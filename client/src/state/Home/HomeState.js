import React, { useState } from "react";
import homeContext from "./homeContext";
import mount from "../../assets/mount.jpg";
import { useSelector } from "react-redux";

const HomeState = ({ children }) => {
  const user = useSelector((state) => state.user);

  const [isPopup, setIsPopup] = useState(false);

  const mainStyle = {
    backgroundImage: `url(${mount})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const mainStyle1 = {
    backgroundImage: `url(${mount})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <homeContext.Provider
      value={{
        mainStyle,
        mainStyle1,
        user,
        isPopup,
        setIsPopup,
      }}
    >
      {children}
    </homeContext.Provider>
  );
};

export default HomeState;
