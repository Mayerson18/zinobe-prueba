import {Action} from '../actions';
import { initialState } from '../state';

export const minAmountReducer = (state = initialState.minAmount, action: Action) => {
    switch (action.type) {
      case "EDIT_MIN_AMOUNT":
        return action.value;
      default:
        return state;
    }
};
