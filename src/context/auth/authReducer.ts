import { AuthState } from "./AuthProvider";

type AuthActionType = { type: "[AUTH] - Login" };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[AUTH] - Login":
      return {
        ...state,
      };
    default:
      return state;
  }
};
