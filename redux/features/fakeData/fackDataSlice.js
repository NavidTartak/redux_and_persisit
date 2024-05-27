import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const INITIAL_STATE = {
  user: null,
};
const getData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  if (res.status === 200) {
    return res.data;
  }
  return null;
};
export const fackDataSlice = createSlice({
  name: "fackDataSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
    setUserByFetch: async (state) => {
      debugger;
      const data = await getData();
      state.user = data;
      return state;
    },
  },
});
export const { setUser, setUserByFetch } = fackDataSlice.actions;
export default fackDataSlice.reducer;
