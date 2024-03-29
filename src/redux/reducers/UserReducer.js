import { createSlice } from '@reduxjs/toolkit'
import { UserList } from '../services/UserService'

const initialState = {}

const userCases = [{
    api : UserList,
    name : "UserList",
}]


const userSlice = createSlice({
    initialState : {},
    name : "user",
    extraReducers : (builder)=>{
        userCases.map((cases)=>{
            
        })
    }
})

export default userSlice.actions