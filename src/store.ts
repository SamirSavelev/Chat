import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { chatListApi } from "./features/chat/chatList-api-slice";
import activeChatReducer from "./features/chat/chatList-slice";

const reducers = combineReducers({
  activeChat: activeChatReducer,
  [chatListApi.reducerPath]: chatListApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatListApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
