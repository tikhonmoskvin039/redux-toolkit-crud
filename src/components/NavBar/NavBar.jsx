import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Home, ShoppingBag } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Stack
      direction={"row"}
      sx={{ padding: "10px 15px", border: "1px solid #d7cccc", borderTop: "0" }}
    >
      <Box sx={{ flex: "1", display: "flex" }}>
        <IconButton onClick={() => navigate("/")} size="large">
          <Home />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={() => navigate("/cart")} size="large">
          <Typography>{cartItems && cartItems.length}</Typography>
          <ShoppingBag />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default NavBar;
