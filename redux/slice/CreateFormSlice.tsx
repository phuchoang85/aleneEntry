import { createSlice } from "@reduxjs/toolkit";
import { createForm } from "../action/CreateForm";

type initial = {
  loading: boolean;
  error: unknown;
  message: string | null;
};

const initialState: initial = {
  loading: false,
  error: null,
  message: "",
};

const createFormApi = createSlice({
  name: "createFormApi",
  initialState,
  reducers: {
    clearMessage: (state) =>{
      state.message = ""
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(createForm.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createForm.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    })
    .addCase(createForm.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;  
    });
  },
});

export const {clearMessage} = createFormApi.actions;
export const createFormReducer = createFormApi.reducer;
