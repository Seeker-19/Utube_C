import React, { useContext } from "react";
import homeContext from "../state/Home/homeContext.js";
import Header from "./Header";
import firebaseContext from "../state/firebase/firebaseContext.js";
import Input from "./Input.jsx";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const { mainStyle1, user } = useContext(homeContext);
  const {
    email,
    setEmail,
    userPassword,
    setUserPassword,
    loginWithGoogle,
    signInWithEmailPass,
  } = useContext(firebaseContext);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  return (
    <div className="h-screen w-screen" style={mainStyle1}>
      <Header />
      <div className="flex justify-center items-center w-fit p-5 py-32 m-auto text-6xl text-gray-300 ">
        <p className="tracking-widest font-jockeyone">LOGIN</p>
      </div>

      <div className="flex justify-center items-center m-auto gap-4 md:flex-row flex-col">
        <Input
          placeholder={"Email Here"}
          icon={<FaEnvelope className="text-xl text-white" />}
          inputState={email}
          inputStateFunc={setEmail}
          type="email"
        />
        <Input
          placeholder={"Password Here"}
          icon={<RiLockPasswordFill className="text-xl text-white" />}
          inputState={userPassword}
          inputStateFunc={setUserPassword}
          type="password"
        />
        <motion.button
          className="border border-red-500 p-2 flex justify-center items-center text-lg font-semibold hover:bg-red-500 text-white rounded-md"
          onClick={signInWithEmailPass}
        >
          Login
        </motion.button>
      </div>
      <div className="flex justify-center items-center m-auto w-full">
        <p className="p-4 font-semibold text-base text-white">
          Don't have an account ? {"  "}
          <motion.button
            onClick={() => navigate("/register")}
            className="text-red-500 text-lg underline"
          >
            Sign Up
          </motion.button>
        </p>
      </div>
      <motion.div
        className="flex items-center justify-center py-2 bg-cardOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4"
        onClick={loginWithGoogle}
      >
        <FcGoogle className="text-3xl" />
        <p className="capitalize text-base text-white">Sign in with Google</p>
      </motion.div>
    </div>
  );
};

export default Login;
