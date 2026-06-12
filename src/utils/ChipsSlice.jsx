import { createSlice } from "@reduxjs/toolkit";

const ChipsSlice = createSlice({
    name: "chips",
    initialState: {
        items: []
    },
    reducers: {
        addChips: (state, action) => {
            state.items.push(action.payload)
        },
        removeChips: (state, action) => {
            state.items = state.items.filter(
                (_, index) => index !== action.payload
            );
        },
        clearChips: (state, action) => {
            state.items = []

        }
    }
})
export const { addChips, removeChips, clearChips } = ChipsSlice.actions
export default ChipsSlice.reducer