import { ReactNode } from "react";

export interface IChatItem {
  id: string;
  avatar: string;
  title: string;
  last_message: {
    created_at: number;
    message: string;
    user_id: string;
    user_name: string;
    user_surname: string;
    you: boolean;
  };
}

export interface IChatList {
  id: string;
  name: string;
}

export interface IHeader {
  children: ReactNode;
  chat?: boolean;
}

export interface IText {
  heading1?: boolean;
  heading2?: boolean;
  disable?: boolean;
  medium?: boolean;
  small?: boolean;
  message?: boolean;
  bold?: boolean;
}

interface IUser {
  avatar: string;
  id: string;
  name: string;
  surname: string;
  you: boolean;
}

export interface ResponseItem {
  created_at: number;
  id: string;
  is_new: boolean;
  message: string;
  user: IUser;
}

export interface IResponseMessage {
  response: Array<ResponseItem>;
}
