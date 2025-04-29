import { ScoreAction, ScoreState } from '../domain/types/scoreAction';
import { TodoAction } from '../domain/types/todoAction';

const initialState: ScoreState = {
  score: 0,
};

export const scoreReducer = (
  state: ScoreState = initialState,
  action: { type: any; payload?: any }
) => {
  switch (action.type) {
    case TodoAction.CREATE_TODO:
      return {
        ...state,
        score: state.score + 1,
      };
    case ScoreAction.GET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};
