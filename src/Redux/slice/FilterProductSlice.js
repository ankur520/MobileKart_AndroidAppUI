import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {backendApis} from '../../utils/APIS';

const initialState = {data: [], isLoader: false, isError: false};

// First, create the thunk
export const filterProductsApiAsync = createAsyncThunk(
  'filterProduct/product',
  async postData => {
    // console.log( "9 -" , postData )

    let sessionUrl =
      backendApis.vendorApi.filter_productdetail_bySlugByFilterSlug +
      postData +
      '/';

    const response = await axios.get(sessionUrl);
    // console.log(response.data)
    return response.data;
  },
);

export const filterProductSlice = createSlice({
  name: 'filterProduct',
  initialState,

  extraReducers: builder => {
    builder.addCase(filterProductsApiAsync.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(filterProductsApiAsync.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(filterProductsApiAsync.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default filterProductSlice.reducer;
