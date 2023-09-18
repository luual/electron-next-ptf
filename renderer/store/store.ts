import { configureStore } from "@reduxjs/toolkit";
import ToastEnabler from "./features/ToastEnabler";
import userSlice from "./features/userSlice"
import portfolioManagerSlice from "./features/portofolioManager"
import StockSlice from "@features/StockSlice";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)
const portfolioManagerReducer = persistReducer(persistConfig, portfolioManagerSlice)
const stockReducer = persistReducer(persistConfig, StockSlice)
const toastReducer = persistReducer(persistConfig, ToastEnabler)

export const appStore = configureStore({
  reducer: {
    toast: toastReducer,
    user: persistedReducer,
    portfolioManager: portfolioManagerReducer,
    stock: stockReducer
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
export const persistor = persistStore(appStore)