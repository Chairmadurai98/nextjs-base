import SERVER from "@/helpers/AxiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UserList = createAsyncThunk('UserList', async (params, thunk) => {
  try {
    return await SERVER.get('/users', {params})
  } catch (error) {
    return thunk.rejectWithValue(error)
  }
})