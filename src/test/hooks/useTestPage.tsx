import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  questionSelect,
  restart,
  updateResult,
} from "@/redux/slice/ResultSlice";
import { resultReq } from "@/constant/type";

export const useTestPage = () => {
  const resultQ = useSelector((state: RootState) => state.result);
  const {data ,loading} = useSelector((state: RootState) => state.dataResult);
  const dispatch = useDispatch();
  const idQuestionSelect = resultQ.questionSelect?.id || 0;

  const nullQuestionSelect = () =>{
    dispatch(questionSelect(null))
  };
  const restartQuestion = () =>{
    dispatch(restart())
  };

  const selectFirstQuestion = () => {
    if(data?.length > 0 && !loading){
      dispatch(questionSelect(data[0]));
    }
  };

  const updateQuestionNoSelectAtNow = () => {
    const questionNoSelectNow = {
      ...resultQ.questionSelect,
      status: "noSelect",
    };
    dispatch(updateResult(questionNoSelectNow));
  };

  const questtionAfter = resultQ.questionList[idQuestionSelect - 2];
  const questionNoSelectAfter = { ...questtionAfter, status: "noSelect" };
  const updateQuestionNoSelectAtAfaterNow = () => {
    updateQuestionNoSelectAtNow();
    dispatch(updateResult(questionNoSelectAfter));
  };

  const updateQuestionSelectedStatusToNoSelect = () => {
    dispatch(questionSelect(questionNoSelectAfter));
  };

  const nextQuestion = () => {
    dispatch(questionSelect(resultQ.questionList[idQuestionSelect]));
  };

  const updateResultAQuestion = (status: "good" | "bad", result: resultReq) => {
    dispatch(updateResult({ ...result, status: status }));
  };
  return {
    resultQ,
    nullQuestionSelect,
    restartQuestion,
    selectFirstQuestion,
    updateQuestionNoSelectAtNow,
    updateQuestionNoSelectAtAfaterNow,
    updateQuestionSelectedStatusToNoSelect,
    nextQuestion,
    updateResultAQuestion,
  };
};
