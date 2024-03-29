import {  configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../reducers";


const makeStore = (initialState, options) => {
  const store = configureStore({
    reducer: rootReducer
  });

  return store;
};

export const wrapper =  createWrapper(makeStore, {debug: true});