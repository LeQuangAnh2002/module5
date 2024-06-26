import cartSlide from "./CartSlice";
import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart:cartSlide.reducer,
    }
})

export default store;