import { createSlice } from "@reduxjs/toolkit";

interface IGetInfo {
    information: string;
    count: number;
};

const initialState: IGetInfo = {
    information: "Hello world!",
    count: 0,
};

const getInfoSlice = createSlice({
    name: "get info slice",
    initialState,
    reducers: {
        count: (state) => {
            state.count++;
        }
    }
});

export default getInfoSlice.reducer;
export const { count } = getInfoSlice.actions;