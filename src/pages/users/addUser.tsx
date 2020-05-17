import * as React from "react";
import { useForm } from "react-hook-form";
import InputRange from 'react-input-range';
import "./addUser.css";
import "react-input-range/lib/css/index.css";
import {AMOUNT_MIN, AMOUNT_MAX} from '../../helpers/config';

type FormData = {
  name: string,
  email: string,
  document: string,
  amount: number,
  dateToPay: Date,
  statusPayCredit: boolean,
  statusCredit: boolean
};

const AddUser = () => {
  const [range, setRange] = React.useState(AMOUNT_MIN);
  const { register, errors, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data)
    console.log('range :>> ', range);
  };

  const SetRange = (newRange: any) => {
    setRange(newRange);
  }
  return (
    <form className="Box" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registro</h1>
        <input
          name="name"
          type="text"
          placeholder="Nombre"
          ref={register({ required: true })}/>
        {errors.name && "El nombre es requerido"}
        <input
          name="document"
          type="text"
          placeholder="Cédula"
          ref={register({ required: true })}/>
        {errors.document && "El documento es requerido"}
        <input
          onChange={e => {SetRange(e.target.value)}}
          value={range}
          type="text"
          placeholder="Monto"/>
        <InputRange
          maxValue={AMOUNT_MAX}
          minValue={AMOUNT_MIN}
          value={range}
          onChange={newRange => {SetRange(newRange)}}/>
        <input name="dateToPay" type="date" placeholder="Fecha para el pago" ref={register({ required: false })}/>
        <input type="submit" value="Crear usuario" ></input>
    </form>
  );
};

export default AddUser;
