import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {backendApis} from '../../utils/APIS';

const initialState = {data: [], isLoader: false, isError: false};

// First, create the thunk
export const fetchAllProducts = createAsyncThunk('products/allproducts', async () => {
  const response = await axios.get(backendApis.vendorApi.addproduct);
    // console.log(response.data)
  return response.data;
});

const allProductsSlice = createSlice({
  name: 'products',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.isLoader = true;
      })

      builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })

      builder.addCase(fetchAllProducts.rejected , (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });

  },
});

export default allProductsSlice.reducer;
