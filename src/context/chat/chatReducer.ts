import { ChatState } from ".";

type ChatActionType = { type: "[Chat] - Create - Chat" };

export const chatReducer = (
    state: ChatState,
  action: ChatActionType,
): ChatState => {
  switch (action.type) {
    case "[Chat] - Create - Chat":
      return {
        ...state,
      };
    default:
      return state;
  }
};
