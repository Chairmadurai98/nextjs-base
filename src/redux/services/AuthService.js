import SERVER from "@/helpers/AxiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const AuthLogin = createAsyncThunk('', async(params, thunk)=>{
try {
  return await SERVER.get('/auth/login', {
    params
  })
} catch (error) {
    return Promise.reject(thunk.rejectWithValue(error))
}
})