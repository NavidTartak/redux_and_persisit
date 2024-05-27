//persist
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
//end persist

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./features/rootReducer";
//persist
const persistConfig = {
  key: "test project",
  version: 1,
  storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//end persist
export const Store = configureStore({
  //if persist
  reducer: persistedReducer,
  //else
  // reducer : rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
//persist
export const persistor = persistStore(Store);
//end persist
