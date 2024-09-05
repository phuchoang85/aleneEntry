import { resultReq } from "@/constant/type";
import { fetchQuestionAsync } from "@/redux/action/DataTestApi";
import { updateDataResult } from "@/redux/slice/ResultSlice";
import { RootState } from "@/redux/store";
import { AsyncThunkAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useWelcome = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.dataResult);

  useEffect(() => {
    if (data.length > 0 && !loading) {
      dispatch(updateDataResult(data));
    }

    if (data.length === 0 && !loading) {
      dispatch(fetchQuestionAsync());
    }
  }, [data]);

  return {
    data,
    loading,
  };
};
