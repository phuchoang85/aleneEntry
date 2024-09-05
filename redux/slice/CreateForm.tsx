import { createSlice } from "@reduxjs/toolkit";

type initial = {
  loading: boolean;
  error: unknown;
  message: string | null;
};

const initialState: initial = {
  loading: false,
  error: null,
  message: null,
};

const createFormApi = createSlice({
  name: "createFormApi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  
  },
});

export const {} = createFormApi.actions;
export const createFormReducer = createFormApi.reducer;
