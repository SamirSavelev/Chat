import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IResponseMessage } from "../../components/interfaces";

export const chatListApi = createApi({
  reducerPath: "chatListApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.clout.one/test" }),
  endpoints: (builder) => ({
    getChat: builder.query<any, { offset: string; limit: string }>({
      query: (body) => ({
        url: `/chat.get`,
        method: "POST",
        body,
      }),
    }),
    getMessage: builder.query<IResponseMessage, { chat_id: string }>({
      query: (body) => ({
        url: `/message.get`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetChatQuery, useGetMessageQuery } = chatListApi;
