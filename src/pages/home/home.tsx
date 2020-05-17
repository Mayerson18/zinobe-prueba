import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { defaultState } from "../../redux/state";

const Home = () => {
  const bankAmount = useSelector((store: defaultState) => store.bankAmount);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch({type: 'EDIT_BANK_AMOUNT', value: 100})}>Sumar</button>
    </>
  );
};

export default Home;
