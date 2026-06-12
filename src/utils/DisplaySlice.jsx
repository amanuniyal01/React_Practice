import { createSlice } from "@reduxjs/toolkit";

const DisplaySlice = createSlice({
    name: "Display",
    initialState: {
        input: ""
    },
    reducers: {
        addText: (state, action) => {
            state.input = action.payload

        },
        Reset: (state, action) => {
            state.input = ""
        }
    }
})
export const { addText, Reset } = DisplaySlice.actions;
export default DisplaySlice.reducer 