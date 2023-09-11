import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {backendApis} from '../../utils/APIS';
import jwt_decode from 'jwt-decode';
import {storeData} from '../../utils/UserEncryptedStoragefunctions';

const initialState = {data: [], isLoader: false, isError: false};

// First, create the thunk
export const placeOrderAsync = createAsyncThunk(
  'placeOrder/place',
  async ({userId, checkoutAmount, addressId, alert, navigate}) => {
    let sessionUrl = backendApis.userApi.placeOrder + userId + '/';
    console.log(sessionUrl);
    console.log(userId, checkoutAmount, addressId, alert, navigate);

    const response = await axios.put(sessionUrl, {
      userId,
      checkoutAmount,
      addressId,
    });

    console.log(response.data);
    if (response.data.status === 200) {
      alert('Thank You COD Order Placed');
      navigate('OrdersScreen');
    }

    return response.data;
  },
);

export const fetchPlacedOrdersAsync = createAsyncThunk(
  'placeOrder/place',
  async userId => {
    let sessionUrl = backendApis.userApi.placeOrder + userId + '/';
    const response = await axios.get(sessionUrl);
    return response.data;
  },
);

const placeOrderSlice = createSlice({
  name: 'placeOrder',
  initialState,

  extraReducers: builder => {
    builder.addCase(fetchPlacedOrdersAsync.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(fetchPlacedOrdersAsync.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(fetchPlacedOrdersAsync.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default placeOrderSlice.reducer;
