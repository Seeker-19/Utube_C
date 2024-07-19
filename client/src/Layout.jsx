import React from "react";
import { Navbar } from "./components";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "#000", minHeight: "100vh" }}>
        <Navbar />
        <Box sx={{ paddingTop: "60px", padding: "1rem" }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
