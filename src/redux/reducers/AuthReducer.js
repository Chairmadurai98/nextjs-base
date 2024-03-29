import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const authCases = [{
    api : ()=>{},
    name : "authLogin",
}]


const authSlice = createSlice({
    initialState : {},
    name : "auth",
    extraReducers : (builder)=>{
        authCases.map((cases)=>{
            builder.addCase(cases.api.pending, ()=>{})
        })
    }
})

export default authSlice.actions