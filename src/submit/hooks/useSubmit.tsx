import { createForm, form, userSelect } from "@/redux/action/CreateForm";
import { clearMessage } from "@/redux/slice/CreateFormSlice";
import { restart } from "@/redux/slice/ResultSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";

export const useSubmit = () => {
  const {
    loading,
    error: errorApi,
    message,
  } = useSelector((state: RootState) => state.createForm);
  const dispatch = useAppDispatch();
  const listQuest = useSelector(
    (state: RootState) => state.result.questionList
  );

  const restartList = () => {
    dispatch(restart());
  };

  const clearMess = () =>{
    dispatch(clearMessage());
  }

  const formatResult = () => {
    const newList: userSelect[] = [];
    listQuest.map((ele) => {
      newList.push({
        id: ele.id,
        content: ele.content,
        status: ele.status,
      });
    });

    return newList;
  };

  const createFormUser = (name: string, email: string, phone: string) => {
    const data: form = {
      email: email,
      name: name,
      phone: phone,
      result: formatResult(),
    };

    dispatch(createForm(data));
  };

  return {
    listQuest,
    restartList,
    createFormUser,
    loading,
    errorApi,
    message,
    clearMess,
  };
};
