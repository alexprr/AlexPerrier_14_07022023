import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "../features/employeeSlice";

import storage from "redux-persist/lib/storage";
import {
 persistReducer,
 FLUSH,
 REHYDRATE,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
} from "redux-persist";

const persistConfig = {
 key: "root",
 storage: storage,
};

export const rootReducers = combineReducers({
 employee: employeeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
  }),
});

export default store;
