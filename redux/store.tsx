import {  configureStore,combineReducers } from "@reduxjs/toolkit";
import { resultReducer } from "./slice/ResultSlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { dataTestReducer } from "./slice/DataTestSlice";
import { useDispatch } from "react-redux";
import { createFormReducer } from "./slice/CreateFormSlice";
import { Platform } from "react-native";
const rootReducer = combineReducers({
  result: resultReducer,
  dataResult: dataTestReducer,
  createForm: createFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList:["result"],
  persistSession: Platform.OS !== "web",
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        thunk: true,
        serializableCheck:{
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
