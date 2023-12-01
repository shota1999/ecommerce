import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type GenderState = string;

const initialState: GenderState = '';

const GenderSlice = createSlice({
    name: "gender",
    initialState,
    reducers: {
        setGenderFilter: (state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
});

export const { setGenderFilter } = GenderSlice.actions;
export default GenderSlice.reducer;
