import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getInfoSlice from "../reducers/getInfoSlice";

const rootReducer = combineReducers({
    getInfo: getInfoSlice
})

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;