import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {backendApis} from '../../utils/APIS';

const initialState = {data: [], isLoader: false, isError: false};

export const fetchCartByUserIdAsync = createAsyncThunk(
  'cart/fetchCartById',
  async id => {
    let sessionUrl = backendApis.userApi.fetch_cart_byUserIdByUserId + `${id}/`;
    const response = await axios.get(sessionUrl);
    return response.data;
  },
);

export const deleteCartItemByUserIdAsync = createAsyncThunk(
  'cart/deleteCartItem',
  async ({userId, cartId}) => {
    // console.log( "deleteCartItemByUserIdAsync - " ,  userId, cartId)
    let sessionUrl = `${backendApis.userApi.delete_cartItemByUserIdAndCartId}${userId}/${cartId}/`;
    const response = await axios.delete(sessionUrl);
    return response.data;
  },
);

export const updateCartQtyByUserIdAsync = createAsyncThunk(
  'cart/updateCartQty',
  async ({cartId, slugName}) => {
    let sessionUrl = `${backendApis.userApi.update_cartqty_byproductidByCartIdAndQtyMessage}${cartId}/${slugName}/`;
    const response = await axios.put(sessionUrl);
    return response.data;
  },
);

export const addProductInCartAsync = createAsyncThunk(
  'addInCart/addProductInCart',
  async ({productId, userId, alert}) => {
    const response = await axios.post(backendApis.userApi.addIn_cart, {
      productId,
      userId,
    });
    // console.log(response.data)

    if (
      response.data.status === 200 &&
      response.data.msg === 'Product Already Exist'
    ) {
      alert('Product Already Exist');
    }

    if (
      response.data.status === 200 &&
      response.data.msg === 'ProductAddedInCart'
    ) {
      // alert("Added In Cart")
    }
    return response.data;
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchCartByUserIdAsync.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(fetchCartByUserIdAsync.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(fetchCartByUserIdAsync.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });

    builder.addCase(deleteCartItemByUserIdAsync.fulfilled, (state, action) => {
      // state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(updateCartQtyByUserIdAsync.fulfilled, (state, action) => {
      // state.isLoader = false;
      state.data = action.payload;
    });
  },
});

export default cartSlice.reducer;
