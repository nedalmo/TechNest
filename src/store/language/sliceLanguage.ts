import { createSlice } from "@reduxjs/toolkit";
type TLanguage =  {
    // dirctions:boolean,
    language:"ar"|"en",
}
const initialState :TLanguage = {
    language:"ar"
}
const sliceLanguage = createSlice({
    name:"language",
    initialState,
    reducers:{
        changeLanguages:(state)=>{
state.language = state.language === "en" ? "ar" : "en";            
         
        }
    }
});


export default sliceLanguage.reducer;
export const {changeLanguages} = sliceLanguage.actions