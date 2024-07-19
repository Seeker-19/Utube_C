import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import Loginpopup from "./Loginpopup";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1} // Reduced padding
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        height: 60, // Set a fixed height
        zIndex: 1000, // Ensure it stays on top
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="logo"
          style={{
            height: "80px",
            width: "80px",
            padding: "10px",
          }}
        />
      </Link>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Loginpopup />
        <SearchBar />
      </Stack>
    </Stack>
  );
};

export default Navbar;
