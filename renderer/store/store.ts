import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/slices";
import ToastEnabler from "./features/ToastEnabler";
import userSlice from "./features/users"
import portfolioManagerSlice from "./features/portofolioManager"

export const appStore = configureStore({
  reducer: {
    counter: counterSlice,
    toast: ToastEnabler,
    user: userSlice,
    portfolioManager: portfolioManagerSlice
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch