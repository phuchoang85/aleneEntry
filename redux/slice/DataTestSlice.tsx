import { createSlice } from "@reduxjs/toolkit";
import { resultReq } from "@/constant/type";
import { fetchQuestionAsync } from "@/redux/action/DataTestApi";

type initial = {
  loading: boolean;
  error: unknown;
  data: resultReq[] | [];
};

const initialState: initial = {
  loading: false,
  error: null,
  data: [],
};

const dataTestSlice = createSlice({
  name: "dataTestSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchQuestionAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
      console.log("loading")
    })
    .addCase(fetchQuestionAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
       console.log("finhnes")
    })
    .addCase(fetchQuestionAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; 
      state.data = []; 
      console.log("eror");
    });
  },
});

export const {} = dataTestSlice.actions;
export const dataTestReducer= dataTestSlice.reducer;