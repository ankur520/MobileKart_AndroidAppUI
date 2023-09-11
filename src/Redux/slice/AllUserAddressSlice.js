import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {backendApis} from '../../utils/APIS';

const initialState = {data: [], isLoader: false, isError: false};

// First, create the thunk
export const allAddressAsync = createAsyncThunk(
  'allAddress/address',
  async userId => {
    const sessionUrl = backendApis.userApi.add_addressByUserId + userId + '/';

    const response = await axios.get(sessionUrl);
    // console.log(response.data)
    return response.data;
  },
);

const allUserAddressSlice = createSlice({
  name: 'allAddress',
  initialState,

  extraReducers: builder => {
    builder.addCase(allAddressAsync.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(allAddressAsync.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(allAddressAsync.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default allUserAddressSlice.reducer;
