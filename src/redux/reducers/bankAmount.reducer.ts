import {Action} from '../actions';
import { initialState } from '../state';

export const bankAmountReducer = (state = initialState.bankAmount, action: Action) => {
    switch (action.type) {
      case "EDIT_BANK_AMOUNT":
        return action.value;
      case "DECREMENT_BANK_AMOUNT":
        let amountDecrement = 0;
        if (state) {
          amountDecrement = parseInt(state);
        }
        return (amountDecrement - action.value);
      case "INCREMENT_BANK_AMOUNT":
        let amount = 0;
        if (state) {
          amount = parseInt(state);
        }
        return (amount + action.value);
      default:
        return state;
    }
};
