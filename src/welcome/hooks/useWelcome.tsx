import { fetchQuestionAsync } from "@/redux/action/DataTestApi";
import { updateDataResult } from "@/redux/slice/ResultSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useWelcome = () => {
  const dispatch = useAppDispatch();
  const { dataQuestion: data, loading } = useSelector(
    (state: RootState) => state.result
  );

  useEffect(() => {
    dispatch(fetchQuestionAsync());
  }, []);

  useEffect(() => {
    if (!loading) {
      dispatch(updateDataResult(data));
    }
  }, [data]);

  return {
    data,
    loading,
  };
};
