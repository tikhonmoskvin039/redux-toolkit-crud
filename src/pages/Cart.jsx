import { Stack, Typography, Box, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import { addToCart, removeFromCart } from "../feature/cartslice/cartslice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!cartItems.length) {
    return <Typography>There is no items here!</Typography>;
  }

  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px",
      }}
    >
      {cartItems && cartItems.length > 0
        ? cartItems.map((p) => (
            <Box
              key={p.id}
              sx={{
                border: "1px solid #d7cccc",
                borderRadius: "4px",
              }}
            >
              <Box
                sx={{
                  height: "200px",
                  padding: "10px",
                  borderBottom: "1px solid #d7cccc",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={p.thumbnail}
                  alt="img"
                />
              </Box>
              <Box sx={{ display: "flex", padding: "10px" }}>
                <Typography
                  sx={{
                    flex: "1",
                    color: "#6f6c6c",
                    fontSize: "14px",
                    display: "flex",
                  }}
                >
                  {p.title}
                </Typography>
                <Typography sx={{ color: "#6f6c6c", fontSize: "14px" }}>
                  {p.price}
                </Typography>
              </Box>
              <Box sx={{ padding: "10px" }}>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    width: "200px",
                  }}
                >
                  {p.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={() => dispatch(addToCart(p))}>
                  <Add />
                </IconButton>
                <Typography>{p.quantity}</Typography>
                <IconButton onClick={() => dispatch(removeFromCart(p))}>
                  <Remove />
                </IconButton>
              </Box>
            </Box>
          ))
        : null}
    </Stack>
  );
};

export default Cart;
