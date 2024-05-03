import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return (state = state.filter((user) => user.id !== action.payload.id));
    },
    updateUser: (state, action) => {
      return (state = state.map((user) =>
        user.id == action.payload.id ? action.payload : user
      ));
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
