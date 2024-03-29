import SERVER from "@/helpers/AxiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const AuthLogin = createAsyncThunk('AuthLogin', async (formData, thunk) => {
  try {
    return await SERVER.post('/auth/login', formData)
  } catch (error) {
    return thunk.rejectWithValue(error)
  }
})