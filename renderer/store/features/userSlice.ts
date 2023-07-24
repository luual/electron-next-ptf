import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { User } from "interfaces/users";

const initialState: User = {
    _id: "",
    lastname: "",
    name: "",
    userIcon: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<User | null>) => {
            if (action.payload == null) {
                state._id = "";
                state.name = "";
                state.lastname = "";
                state.userIcon = "";
            } else {   
                state._id = action.payload._id;
                state.name = action.payload.name;
                state.lastname = action.payload.lastname;
                state.userIcon = action.payload.userIcon;
            }
        }
    }
})

export const { updateUser } = userSlice.actions;

export const userInfo = (state: RootState) => state.user;

export default userSlice.reducer;