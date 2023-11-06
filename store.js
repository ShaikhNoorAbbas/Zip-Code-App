// store.js
import { configureStore } from "@reduxjs/toolkit";
import api from "@/Redux/api"; // Your RTK Query API slice
import dataReducer from "@/Redux/dataSlice";
const store = configureStore({
  reducer: {
    myData: dataReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
