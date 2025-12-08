import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import menuReducer from "../slices/menuSlice";
import chefReducer from "../slices/chefSlice";
// import cartReducer from "../slices/cartSlice";
// import orderReducer from "../slices/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    chef: chefReducer,
    // cart: cartReducer,
    // order: orderReducer,
  },
});
