/* Instruments */
import { apiSlice } from "./apiSlice/apiSlice";
import { counterSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer
};
