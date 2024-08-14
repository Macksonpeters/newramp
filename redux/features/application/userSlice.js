import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topNews: null,
  africaNews: null,
  usaNews: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateTopNews: (state, action) => {
      state.topNews = action.payload;
    },
    updateAfricaNews: (state, action) => {
      state.africaNews = action.payload;
    },
    updateUsaNews: (state, action) => {
      state.usaNews = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { updateTopNews, updateAfricaNews, updateUsaNews } =
  userSlice.actions;
