import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext,useEffect } from "react";
import firebaseContext from "../state/firebase/firebaseContext";
import homeContext from "../state/Home/homeContext";
import Header from "./Header";
import Input from "./Input";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { ImProfile } from "react-icons/im";

const Register = () => {
  const navigate = useNavigate();

  const { mainStyle1,user } = useContext(homeContext);
  const {
    email,
    setEmail,
    userPassword,
    setUserPassword,
    userName,
    setUserName,
    signUpWithEmailPass,
  } = useContext(firebaseContext);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);
  return (
    <div className="h-screen w-screen" style={mainStyle1}>
      <Header />
      <div className="flex justify-center items-center w-fit p-5 py-32 m-auto text-5xl text-gray-300 ">
        <p className="tracking-widest font-jockeyone">REGISTER</p>
      </div>

      {/*Input Box for register */}

      <div className="flex justify-center items-center m-auto gap-4 md:flex-row flex-col">
        <Input
          placeholder={"Name Here"}
          icon={<ImProfile className="text-xl text-white" />}
          inputState={userName}
          inputStateFunc={setUserName}
          type="text"
        />
        <Input
          placeholder={"Email Here"}
          icon={<FaEnvelope className="text-xl text-white" />}
          inputState={email}
          inputStateFunc={setEmail}
          type="email"
        />
        <Input
          placeholder={"Password Here"}
          icon={<RiLockPasswordFill className="text-xl text-white " />}
          inputState={userPassword}
          inputStateFunc={setUserPassword}
          type="password"
        />
        <motion.button
          onClick={signUpWithEmailPass}
          className="border border-red-500 p-2 flex justify-center items-center text-lg font-semibold rounded-md text-white hover:bg-red-500 "
        >
          Register
        </motion.button>
      </div>
      <div className="flex justify-center items-center m-auto w-full">
        <p className="p-4 font-semibold text-base text-white">
          Already have an account ? {"  "}
          <motion.button
            onClick={() => navigate("/login")}
            className="text-red-500 text-lg underline"
          >
            Login
          </motion.button>
        </p>
      </div>
     
    </div>
  );
};

export default Register;
