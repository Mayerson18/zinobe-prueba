import {Action} from '../actions';
import { initialState } from '../state';

export const maxAmountReducer = (state = initialState.maxAmount, action: Action) => {
    switch (action.type) {
      case "EDIT_MAX_AMOUNT":
        return action.value;
      default:
        return state;
    }
};
