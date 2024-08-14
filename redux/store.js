"use client";
import { configureStore, combineReducers, Tuple } from "@reduxjs/toolkit";
import userReducer from "./features/application/userSlice";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const encryptor = encryptTransform({
  secretKey: "v2y/F?E(H+MbQegg",
  onError: function (error) {
    console.log(error);
  },
});

const persistConfig = {
  key: "root", // The key for the root of your state in storage
  version: 1,
  storage: storageSession,
  transforms: [encryptor],
};

const reducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({ serializableCheck: false }),
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
