import React from "react";
import firebaseContext from "./firebaseContext.js";
import { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../config/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validateUserJWT } from "../../api/index.js";
import { setUserDetails } from "../../context/userActions.js";
import { setUserNULL } from "../../context/userActions.js";
import toast from "react-hot-toast";

const firebaseAuth = getAuth(app);

const FirebaseState = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [userName, setUserName] = useState("");

  const signInWithEmailPass = async () => {
    if (email !== "" && userPassword !== "") {
      await signInWithEmailAndPassword(firebaseAuth, email, userPassword).then(
        (userCred) => {
          console.log(userCred);
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJWT(token).then((data) => {
                  dispatch(setUserDetails(data));
                  console.log(data);
                });
                //toast.success("Logged in Succesfully");
                navigate("/");
              });
            }
          });
        }
      );
    }
  };

  const loginWithGoogle = async () => {
    console.log("clicked");

    await signInWithPopup(firebaseAuth, provider)
      .then((userCred) => {
        firebaseAuth.onAuthStateChanged((cred) => {
          if (cred) {
            cred.getIdToken().then((token) => {
              validateUserJWT(token).then((data) => {
                console.log(token);
                dispatch(setUserDetails(data));
              });
            });
            //toast.success("Logged in Succesfully");
            navigate("/feed");
          } else {
            //toast.error("Login Error");
          }
        });
      })
      .catch((error) => console.log(error));
  };

  const signUpWithEmailPass = async () => {
    await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      userPassword
    ).then((userCred) => {
      // const newUser = userCred.user;
      // const auth = getAuth();
      // updateProfile(auth.currentUser,{
      //   displayName:userName,
      // })
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred.getIdToken().then((token) => {
            validateUserJWT(token).then((data) => {
              dispatch(setUserDetails(data));
              console.log(data);
            });
            // toast.success("Logged in Succesfully");
            navigate("/feed");
          });
        } else {
          //toast.error("Login Error");
        }
      });
    });
  };
  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNULL());
        setEmail("");
        setUserPassword("");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <firebaseContext.Provider
      value={{
        email,
        setEmail,
        userPassword,
        setUserPassword,
        userName,
        signOut,
        setUserName,
        loginWithGoogle,
        signInWithEmailPass,
        signUpWithEmailPass,
      }}
    >
      {children}
    </firebaseContext.Provider>
  );
};

export default FirebaseState;
