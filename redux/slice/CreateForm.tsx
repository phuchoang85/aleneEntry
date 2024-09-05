// import { createSlice } from "@reduxjs/toolkit";
// import { createForm } from "@/api";

// type initial = {
//   loading: boolean;
//   error: unknown;
//   message: string | null;
// };

// const initialState: initial = {
//   loading: false,
//   error: null,
//   message: null,
// };

// const createFormApi = createSlice({
//   name: "createFormApi",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createForm.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createForm.fulfilled, (state, action) => {
//         state.loading = false;
//         state.message = action.payload;
//       })
//       .addCase(createForm.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const {} = createFormApi.actions;
// export const createFormReducer = createFormApi.reducer;
