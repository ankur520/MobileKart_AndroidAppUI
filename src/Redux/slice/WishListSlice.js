import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {backendApis} from '../../utils/APIS';

const initialState = {data: [], isLoader: false, isError: false};

// First, create the thunk
export const fetchWishListAsync = createAsyncThunk(
  'wishlist/products',
  async userId => {
    let sessionUrl = backendApis.userApi.wishlist + userId + '/xyz/';

    // console.log(sessionUrl)

    const response = await axios.get(sessionUrl);
    // console.log(response.data)
    return response.data;
  },
);

export const addItemInWishListAsync = createAsyncThunk(
  'wishlist/addItem',
  async ({productId, userId, alert}) => {
    let sessionUrl = backendApis.userApi.wishlist + `${userId}/${productId}/`;

    const response = await axios.post(sessionUrl);
    if (
      response.data.status === 200 &&
      response.data.msg === 'addedInWishlist'
    ) {
      alert('Product Added in Wishlist');
    }

    if (response.data.msg === 'WishListPostRequest') {
      alert('Already Exist');
    }
    return response.data;
  },
);

export const removeItemFromWishListAsync = createAsyncThunk(
  'wishlist/removeItem',
  async ({productId, userId, alert}) => {
    //  console.log("User - " , productId, userId )
    let sessionUrl = backendApis.userApi.wishlist + `${userId}/${productId}/`;

    const response = await axios.delete(sessionUrl);

    // if (
    //     response.data.status === 200 &&
    //     response.data.msg === 'ItemDeleted'
    //   ) {
    //     alert('ItemDeleted');
    //   }

    //   if (response.data.msg === 'item not exist') {
    //     alert("Sorry Item doesn't exist");
    //   }
    // console.log(response.data)
    return response.data;
  },
);

export const filterProductSlice = createSlice({
  name: 'wishlist',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchWishListAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(fetchWishListAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })

      .addCase(fetchWishListAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      })

      .addCase(removeItemFromWishListAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(removeItemFromWishListAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        // state.data.wishlistData.productId.id
        // action.arg.productId
        // console.log("------------------------------------------ \n \n ")
        // console.log("state ->" , state  )
        // console.log("action ->" , action  )
        // console.log( "% - ",  state.data.wishlistData)
        // console.log("action - ", state.data.wishlistData )
        // console.log("prev req - " ,  action.meta.arg.productId )
        // state.data.wishlistData.findIndex(item=> console.log(item.productId.id === payLoadId ? "True" : "False" ) )
        // state.data.wishlistData.findIndex(item=> console.log(item.productId.id ) )

        let payLoadId = action.meta.arg.productId;

        const index = state.data.wishlistData.findIndex(
          item => item.productId.id === payLoadId,
        );
        state.data.wishlistData.splice(index, 1);
        // console.log("index " , index )
        // state.data = action.payload;
      });
  },
});

export default filterProductSlice.reducer;
