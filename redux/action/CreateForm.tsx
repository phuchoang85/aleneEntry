import { CREATE_FORM_REQUEST } from "@/redux/action";
import database from "@react-native-firebase/database";

import { createAsyncThunk } from "@reduxjs/toolkit"; // Assuming you're using Redux Toolkit

export type form = {
  name: string;
  phone: string;
  email?: string;
  result: userSelect[]
};

export type userSelect = {
  id: number;
  content: string;
  status: "good" | "bad" | "noSelect";
} 

export const createForm = createAsyncThunk(
  CREATE_FORM_REQUEST,
  async (data: form) => {
    try {
      const responseCheck = await checkData(data);
      if (responseCheck) {
        throw new Error(responseCheck);
      }

      const reference = await database().ref("/form").push(data);
      return reference.key;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const checkData = async (data: form) => {
  try {
    const snapshotPhoneNumber = await database()
      .ref("/form")
      .orderByChild("phone")
      .equalTo(data.phone)
      .once("value");
    const existingDataPhoneNumber = snapshotPhoneNumber.val();
    if (existingDataPhoneNumber) return "Số điện thoại được đăng kí";

    if (data.email) {
      const snapshotEmail = await database()
        .ref("/form")
        .orderByChild("email")
        .equalTo(data.email)
        .once("value");
      const existingDataEmail = snapshotEmail.val();
      if (existingDataEmail) return "Email được đăng kí";
    }

    return null;
  } catch (error) {
    console.error(error);
    return "Lỗi trong quá trình lưu";
  }
};
