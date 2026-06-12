import { configureStore } from "@reduxjs/toolkit";
import chipsReducer from "./ChipsSlice";
import dropDownReducer from "./DropDownSlice"
import displayReducer from "./DisplaySlice"

const store = configureStore({
    reducer: {
        chips: chipsReducer,
        dropdown: dropDownReducer,
        display: displayReducer
    },
});

export default store;