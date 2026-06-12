import { createSlice } from "@reduxjs/toolkit";

const DropDownSlice = createSlice({
    name: "multiDropDown",
    initialState: {
        selectedValues: []

    },
    reducers: {
        toggleOption: (state, action) => {
            const exists = state.selectedValues.find(
                (item) => item.id === action.payload.id
            )

            state.selectedValues = exists
                ? state.selectedValues.filter(item => item.id !== action.payload.id)
                : [...state.selectedValues, action.payload]
        },
        clearAll: (state, action) => {
            state.selectedValues = []

        },
        selectAll: (state, action) => {
            state.selectedValues = action.payload

        }
    }
})
export const { selectAll, toggleOption, clearAll } = DropDownSlice.actions
export default DropDownSlice.reducer