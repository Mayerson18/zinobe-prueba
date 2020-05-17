import * as React from "react";
import { useSelector } from 'react-redux';
import { defaultState } from "../../redux/state";
import { numberWithCommas } from "../../helpers/numberWithCommas";

const BankBaseCapital = () => {
  const bankAmount = useSelector((store: defaultState) => store.bankAmount);

  return (
    <button
      key={name}
      className={"active"}
      style={{
        display: 'flex',
        position: 'relative',
        left: '40%',
        top: '1em'
      }}
    >
      <div
        style={{paddingRight: '1em'}}
      >monto base del banco: </div>
      <div>${numberWithCommas(bankAmount)}</div>
    </button>
  );
};

export default BankBaseCapital;
