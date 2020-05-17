import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { defaultState } from "./redux/state";

const CounterReducer = () => {
  const bankAmount = useSelector((store: defaultState) => store.bankAmount);
  const dispatch = useDispatch();
  return (
    <>
      <p>bankAmount: {bankAmount}</p>
      <button onClick={() => dispatch({type: 'EDIT_BANK_AMOUNT', value: 100})}>Sumar</button>
    </>
  );
};

export default CounterReducer;
