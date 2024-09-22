import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface userState {
    user: User | null,
    loading:boolean
}

const initialState:userState = {
    user: null,
    loading:false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginedUser: (state , action:PayloadAction<User>) => {
            state.loading = true;
            state.user = action.payload
        },
        logoutedUser: (state) => {
            state.loading = false;
            state.user = null;
        }
    }
});

export const { loginedUser , logoutedUser } = userSlice.actions;
export default userSlice.reducer;