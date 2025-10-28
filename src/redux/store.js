import { configureStore } from "@reduxjs/toolkit";
import themseReducer from "./themseSlice"

export const store = configureStore({
    reducer : {
        theme : themseReducer
    }
})