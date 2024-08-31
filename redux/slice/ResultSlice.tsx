import { questionList } from "@/constant/data";
import { initial, resultReq } from "@/constant/type";
import { createSlice } from "@reduxjs/toolkit";


const initialState: initial = {
    questionList: questionList,
    questionSelect: null,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    updateResult: (state, action) => {
      const data = action.payload;
      const itemIndex = state.questionList.findIndex((item) => item.id === data.id);
      if (itemIndex !== -1) {
        state.questionList[itemIndex].status = data.status;
      }
    },
    questionSelect: (state, action) => {
        state.questionSelect = action.payload;
    },
    restart: (state)=>{
      state.questionList = questionList;
    }
  },
});

export const { updateResult, questionSelect,restart } = resultSlice.actions;
export const resultReducer = resultSlice.reducer;
