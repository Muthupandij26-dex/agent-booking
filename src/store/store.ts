import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import storage from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";

const devMode = true;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: devMode,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
