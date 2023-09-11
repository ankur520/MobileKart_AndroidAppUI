import {configureStore} from '@reduxjs/toolkit';

import AllProductsSlice from './slice/AllProductsSlice';
import CounterSlice from './slice/CounterSlice';
import CartSlice from './slice/CartSlice';
import UserLoginSlice from './slice/UserLoginSlice';
import FilterProductSlice from './slice/FilterProductSlice';
import WishListSlice from './slice/WishListSlice';
import AllUserAddressSlice from './slice/AllUserAddressSlice';
import PlaceOrderSlice from './slice/PlaceOrderSlice';

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    allProducts: AllProductsSlice,
    carts: CartSlice,
    userLogin: UserLoginSlice,
    filterProduct: FilterProductSlice,
    wishList: WishListSlice,
    allUserAddress: AllUserAddressSlice,
    placeOrder: PlaceOrderSlice,
  },
});
