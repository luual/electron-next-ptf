import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { User } from "interfaces/users";

const initialState: User = {
    id: "",
    lastname: "",
    name: "",
    userIcon: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.lastname = action.payload.lastname;
            state.userIcon = action.payload.userIcon;
        }
    }
})

export const { updateUser } = userSlice.actions;

export const userInfo = (state: RootState) => state.user;

export default userSlice.reducer;