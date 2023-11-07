"use client";
import { type FC, useReducer } from "react";
import { AuthContext, authReducer } from ".";
import { User } from "@/interfaces";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthState {
  user: User | null;
}

const AUTH_INITIAL_STATE: AuthState = {
  user: null,
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        ...state,
      }}
    ></AuthContext.Provider>
  );
};
