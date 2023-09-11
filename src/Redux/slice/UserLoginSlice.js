import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {backendApis} from '../../utils/APIS';
import jwt_decode from 'jwt-decode';
import {storeData} from '../../utils/UserEncryptedStoragefunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

// JSON.parse(AsyncStorage.getItem('myToken') ?? ""),
const initialState = {
  data: [],
  isLoader: false,
  isError: false,
  token: '',
  isUserLoggedIn: '',
  userInfo: {
    id: '',
    fname: '',
    lname: '',
    email: '',
  },
};

// First, create the thunk
export const userLoginAsync = createAsyncThunk(
  'userLogin/userLogin',
  async ({email, password, alert, redirect}) => {
    let loginEmailId = email;
    let loginPasswords = password;

    // console.log( loginEmailId, loginPasswords , alert )

    const response = await axios.post(backendApis.userApi.userLogin, {
      loginEmailId,
      loginPasswords,
    });

    // console.log(response.data)
    if (response.data.status === 200) {
      if (response.data.msg === 'Incorrect Email Address') {
        alert('Incorrect Email Address');
      }

      if (response.data.msg === 'Wrong Password') {
        alert('Wrong Password');
      }

      if (response.data.msg === 'UserLoggedIn') {
        // console.log(response.data.token)

        let decoded = jwtDecode(response.data.token);

        storeData(decoded);
        alert('Login SuccessFull');
        redirect('HomeScreen');
        // console.log(decoded)
      }
    }

    return response.data;
  },
);

export const userSignUpAsync = createAsyncThunk(
  'signup/userSignUp',
  async ({firstName, LastName, Eemail, Ppassword, alert, navigate}) => {
    // let firstName = values.fname;
    // let LastName = values.lname;
    // let Eemail = values.email;
    // let Ppassword = values.password;

    const response = await axios.post(backendApis.userApi.signup, {
      firstName,
      LastName,
      Eemail,
      Ppassword,
    });

    if (response.data.status === 200) {
      if (response.data.msg === 'userSignUpSuccessfull') {
        alert('Signup Successfull');
        navigate('Login');
      }

      if (response.data.msg === 'userAlreadyExist') {
        alert('Email Already Exist');
      }
    }

    // console.log(response.data)
    return response.data;
  },
);

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,

  reducers: {
    logout(state, action) {
      // console.log("Logout state - " , state )
      // console.log("Logout action - " , action )
      // state.token = null
      // AsyncStorage.removeItem('token')
    },
  },

  extraReducers: builder => {
    builder.addCase(userLoginAsync.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(userLoginAsync.fulfilled, (state, action) => {
      state.isLoader = false;
      // console.log("action - " , action.payload.token )

      if (action.payload.msg === 'UserLoggedIn') {
      }
      // state.data = action.payload;
    });

    builder.addCase(userLoginAsync.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });

    builder.addCase(userSignUpAsync.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(userSignUpAsync.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(userSignUpAsync.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export const {logout} = userLoginSlice.actions;
export default userLoginSlice.reducer;
