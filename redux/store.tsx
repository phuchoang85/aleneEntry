import {  configureStore,combineReducers } from "@reduxjs/toolkit";
import { resultReducer } from "./slice/ResultSlice";
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from "redux-persist/es/storage";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  result: resultReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: storage,
  timeout: 30000,
  whitelist: ['resultReducer'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        thunk: true,
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
