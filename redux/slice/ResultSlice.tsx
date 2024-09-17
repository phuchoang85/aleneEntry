import { initial, resultReq } from "@/constant/type";
import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestionAsync } from "../action/DataTestApi";

const initialState: initial = {
  loading: false,
  error: null,
  dataQuestion: [],
  questionList: [],
  questionSelect: null,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    updateResult: (state, action) => {
      const data = action.payload;
      const itemIndex = state.questionList.findIndex(
        (item) => item.id === data.id
      );
      if (itemIndex !== -1) {
        state.questionList[itemIndex].status = data.status;
      }
    },
    questionSelect: (state, action) => {
      state.questionSelect = action.payload;
    },
    restart: (state) => {
      state.questionList = state.dataQuestion;
    },
    updateDataResult: (state, action) => {
      state.questionList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestionAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.dataQuestion = action.payload;
        state.error = null;
      })
      .addCase(fetchQuestionAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.dataQuestion = [];
      });
  },
});

export const { updateResult, questionSelect, restart, updateDataResult } =
  resultSlice.actions;
export const resultReducer = resultSlice.reducer;
