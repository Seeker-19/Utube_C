import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

import Login from "./components/Login.jsx";
import Layout from "./Layout.jsx";
import Main from "./components/Main.jsx";
import HomeState from "./state/Home/HomeState.js";
import FirebaseState from "./state/firebase/FirebaseState.js";
import Register from "./components/Register.jsx";

import { getAuth } from "firebase/auth";
import { app } from "./config/firebase.js";
import { validateUserJWT } from "./api/index.js";
import { setUserDetails } from "./context/userActions.js";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [loading, setLoading] = useState(false);
  const firebaseAuth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      console.log(cred);
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWT(token).then((data) => {
            console.log("user", data);
            dispatch(setUserDetails(data));
          });
        });
      } else {
        navigate("/");
      }
      setInterval(() => {
        setLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <div>
      {loading && (
        <div className="h-screen w-screen items-center justify-center">
          <motion.div className="fixed z-50 inset-0 backdrop-blur-md flex items-center justify-center w-full">
            ...isloading
          </motion.div>
        </div>
      )}
      {!loading && (
        <FirebaseState>
          <HomeState>
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />

              <Route path="/*" exact element={<Layout />}>
                <Route path="feed" exact element={<Feed />} />
                <Route path="video/:id" exact element={<VideoDetail />} />
                <Route path="channel/:id" exact element={<ChannelDetail />} />
                <Route
                  path="search/:searchTerm"
                  exact
                  element={<SearchFeed />}
                />
              </Route>
            </Routes>
            <Toaster />
          </HomeState>
        </FirebaseState>
      )}
    </div>
  );
};
export default App;
