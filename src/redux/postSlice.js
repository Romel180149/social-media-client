import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "./store";

const initialState = {

    user: JSON.parse(window?.localStorage.getItem("user"))?? {},
    edit: false,

};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state,action){
            state.user = action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload));

        },
    },

});
export default userSlice.reducer;

export function UserLogin(user){
    return (dispatch,getState)=>{
        dispatch(userSlice.actions.login(user));
    };
}
export function Logout(){
    return (dispatch,getState)=>{
        dispatch(userSlice.actions.Logout(user));
    };
}
export function UpdateProfile(val){
    return (dispatch,getState)=>{
        dispatch(userSlice.actions.UpdateProfile(user));
    };
}
