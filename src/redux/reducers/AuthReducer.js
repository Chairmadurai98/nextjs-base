import { createSlice } from '@reduxjs/toolkit'
import { AuthLogin } from '../services/AuthService'

const initialState = {}

const authCases = [{
    api : AuthLogin,
    name : "authLogin",
}]


const authSlice = createSlice({
    initialState : {},
    name : "auth",
    extraReducers : (builder)=>{
        authCases.map((cases)=>{
            builder.addCase(cases.api.pending, (state, payload)=>{
                
            })
        })
    }
})

export default authSlice.actions