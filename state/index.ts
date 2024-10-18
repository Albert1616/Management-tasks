import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

interface initialStateTypes{
    isSideBarCollapsed:boolean,
    isDarkMode:boolean
}

const initialState:initialStateTypes = {
    isSideBarCollapsed: false,
    isDarkMode:false
}; //estado inicial

export const globalSlice = createSlice({ //criar slice
    name:"global",
    initialState,
    reducers:{ //ações que mudam o estado
        setIsSideBarCollapsed:(state, action:PayloadAction<boolean>) =>{
            state.isSideBarCollapsed = action.payload;
        },
        setIsDarkMode:(state, action:PayloadAction<boolean>) =>{
            state.isDarkMode = action.payload
        }
    }
})

export const {setIsSideBarCollapsed, setIsDarkMode} = globalSlice.actions; //ações do slice
export default globalSlice.reducer;