import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/cartslice/cartslice";
import {
  callProductListApi,
  getProducts,
} from "../feature/productslice/productslice";

const Products = () => {
  const dispatch = useDispatch();

  const { productList, isLoading } = useSelector((store) => store?.product);
  const { cartItems } = useSelector((state) => state.cart);
  console.log("productList", productList);

  useEffect(() => {
    dispatch(callProductListApi()); // ! get data to redux store
  }, []);

  if (isLoading) {
    return <Typography>Loading ...</Typography>;
  }

  const handleAddToCart = (p) => {
    dispatch(addToCart(p));
  };

  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px",
      }}
    >
      {productList && productList.length > 0
        ? productList.map((p) => (
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
                }}
              >
                <Button
                  sx={{ padding: "8px 25px", border: "1px solid black" }}
                  onClick={() => handleAddToCart(p)}
                  disabled={cartItems && cartItems.length > 0 ? cartItems.map(i => i.id).indexOf(p.id) > -1 : false}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))
        : null}
    </Stack>
  );
};

export default Products;
