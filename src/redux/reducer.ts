import {bankAmountReducer} from './reducers/bankAmount.reducer';
import {minAmountReducer} from './reducers/minAmount.reducer';
import {maxAmountReducer} from './reducers/maxAmount.reducer';
import { combineReducers } from "redux";

export default combineReducers({
  bankAmount: bankAmountReducer,
  maxAmount: maxAmountReducer,
  minAmount: minAmountReducer
})