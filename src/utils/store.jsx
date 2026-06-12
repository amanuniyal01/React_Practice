import { configureStore } from "@reduxjs/toolkit";
import chipsReducer from "./ChipsSlice";
import dropDownReducer from "./DropDownSlice"

const store = configureStore({
    reducer: {
        chips: chipsReducer,
        dropdown: dropDownReducer
    },
});

export default store;