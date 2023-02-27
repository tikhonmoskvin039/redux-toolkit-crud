import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const data = [
  { name: "Prod 1", id: 1 },
  { name: "Prod 2", id: 2 },
  { name: "Prod 3", id: 3 },
];

const initialState = {
  productList: [],
  isLoading: false,
  isFailed: false,
};

export const callProductListApi = createAsyncThunk(
  "/product/callproductlistapi",
  async function () {
    try {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const result = await apiResponse.json();
      return result;
    } catch (err) {
      console.log("err", err);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  //   reducers: {
  //     getProducts: (state) => {
  //       state.productList = data;
  //     },
  //   },
  extraReducers: {
    [callProductListApi.pending]: (state) => {
      state.isLoading = true;
    },
    [callProductListApi.fulfilled]: (state, action) => {
      const { payload } = action;
      const { products } = payload;
      state.isLoading = false;
      state.productList = products;
    },
    [callProductListApi.rejected]: (state) => {
      state.isLoading = false;
      state.isFailed = true;
    },
  },
});

export const { getProducts } = productSlice.actions; // ! импортирует экшен

export default productSlice.reducer; // ! импортируем редюсер
