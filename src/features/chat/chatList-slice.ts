import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChatList } from "../../components/interfaces";

const initialState: IChatList = {
  id: "",
  name: "",
};

export const activeChat = createSlice({
  name: "activeChat",
  initialState,
  reducers: {
    setActiveChat: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { setActiveChat } = activeChat.actions;
export const selectActiveChat = (state: RootState) => state.activeChat;
export default activeChat.reducer;
