import {combineReducers} from "@reduxjs/toolkit";
import {counterReducer} from "./counterSlice";

export const rootReducer = combineReducers({
    counter: counterReducer
})