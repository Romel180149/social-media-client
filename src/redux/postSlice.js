import { createSlice } from "@reduxjs/toolkit";

// import { dispatch } from "./store";

const initialState = {
posts:{},

};
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPosts(state,action){
            state.posts = action.payload;
        },
    },

});
export default postSlice.reducer;

export function SetPosts(post){
    return (dispatch,getState)=>{
        dispatch(postSlice.actions.getPosts(post));
    };
}
// export function Logout(){
//     return (dispatch,getState)=>{
//         dispatch(postSlice.actions.Logout(user));
//     };
// }
// export function UpdateProfile(val){
//     return (dispatch,getState)=>{
//         dispatch(postSlice.actions.UpdateProfile(user));
//     };
// }
