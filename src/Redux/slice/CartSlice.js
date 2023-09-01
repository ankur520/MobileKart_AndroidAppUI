import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {backendApis} from '../../utils/APIS';

const initialState = {data: [], isLoader: false, isError: false};

export const fetchCartByUserId = createAsyncThunk('cart', async () => {
  let sessionUrl = backendApis.userApi.fetch_cart_byUserIdByUserId + '1/';
  const response = await axios.get(sessionUrl);
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchCartByUserId.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(fetchCartByUserId.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(fetchCartByUserId.rejected, (state, action) => {
        state.isLoader = false;
      state.isError = true;
    });
  },
});

export default cartSlice.reducer;
