import { configureStore } from "@reduxjs/toolkit";
import GenderReducer from "./GenderSlice"
import cartReducer from "./CartSlice"

export const ReduxStore = configureStore({
    reducer:{
        gender:GenderReducer,
        cart:cartReducer
    }
})

export type RootState = ReturnType<typeof ReduxStore.getState>;