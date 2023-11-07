"use client"
import { type FC, useReducer } from "react";
import { ChatContext, chatReducer } from ".";
import { Message, User } from "@/interfaces";

interface ChatProviderProps {
  children: React.ReactNode;
}

export interface ChatState {
  id: string;
  messages: Message[];
  users: User[];
  name: string;
}

const CHAT_INITIAL_STATE: ChatState = {
  id: "",
  messages: [],
  users: [],
  name: "",
};

export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, CHAT_INITIAL_STATE);

  return (
    <ChatContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
