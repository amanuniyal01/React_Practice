import { configureStore } from "@reduxjs/toolkit";
import chipsReducer from "./ChipsSlice";

const store = configureStore({
    reducer: {
        chips: chipsReducer,
    },
});

export default store;