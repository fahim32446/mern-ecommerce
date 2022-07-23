import { configureStore, combineReducers } from "@reduxjs/toolkit";
import useReducer from "./userRedux";
import productReducer from "./productRedux";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import userRedux from "./userRedux";

const persistConfig = {
  key: 'root',
  version: 1, 
  storage,
}

const rootReducer = combineReducers({
  user: useReducer,
  product: productReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
