import {Action} from '../actions';
import { initialState } from '../state';

export const bankAmountReducer = (state = initialState.bankAmount, action: Action) => {
    switch (action.type) {
      case "EDIT_BANK_AMOUNT":
        return action.value;
      default:
        return state;
    }
};
