import {configureStore} from '@reduxjs/toolkit';

import AllProductsSlice from './slice/AllProductsSlice';
import CounterSlice from './slice/CounterSlice';
import CartSlice from './slice/CartSlice';

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    allProducts: AllProductsSlice,
    carts: CartSlice,

  },
});
