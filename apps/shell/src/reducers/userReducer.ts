import { UserAction, UserState } from '../domain/types/userAction';

const initialState: UserState = {
  user: undefined,
};

export const userReducer = (
  state: UserState = initialState,
  action: { type: any; payload?: any }
) => {
  switch (action.type) {
    case UserAction.SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
