import { resultReq } from "@/constant/type";
import { FETCH_QUESTION } from "@/redux/action";
import database from "@react-native-firebase/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchQuestionAsync = createAsyncThunk(FETCH_QUESTION, async () => {
  try {
    const reference = await database().ref("/dataTest").once("value");
    const data = (reference.val() as resultReq[]) || [];
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
});
