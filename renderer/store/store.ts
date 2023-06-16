import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/slices";

export const appStore = configureStore({
  reducer: {
    counter: counterSlice
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch