import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useContext } from "react";
import firebaseContext from "../state/firebase/firebaseContext";
import homeContext from "../state/Home/homeContext";
import { motion } from "framer-motion";

const Loginpopup = () => {
  const { signOut } = useContext(firebaseContext);

  const { user, isPopup, setIsPopup } = useContext(homeContext);
  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsPopup(true)}
    >
      <div className="w-12 h-12 rounded-full shadow-md cursor-pointer">
        {user?.picture ? (
          <motion.img
            className="w-full h-full object-cover rounded-full"
            src={user.picture}
            alt="User Profile"
          />
        ) : (
          <CgProfile className="w-full h-full object-cover rounded-full" />
        )}
      </div>
      {isPopup && (
        <motion.div
          onMouseLeave={() => setIsPopup(false)}
          className="px-6 py-4 w-56 bg-gray-950 backdrop-blur-md rounded-md shadow-md absolute top-16 right-0 flex flex-col gap-4"
        >
          <p className="text-xl font-bold text-white">
            {user?.name ? user?.name : user?.email}
          </p>
          <Link
            className="hover:text-red-500 text-xl text-white"
            to={"/feed"}
            onClick={() => setIsPopup(false)}
          >
            Workspace
          </Link>
          <hr />
          <motion.div
            onClick={() => {
              signOut();
              setIsPopup(false);
            }}
            className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-300 gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <MdLogout className="text-2xl text-black group-hover::text-headingColor" />
            <p className="text-black text-xl group-hover:text-headingColor">
              Sign out
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Loginpopup;
