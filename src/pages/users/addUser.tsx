import * as React from "react";
import { useForm } from "react-hook-form";
import InputRange from 'react-input-range';
import DatePicker from 'react-date-picker';
import "./addUser.css";
import "react-input-range/lib/css/index.css";
import {AMOUNT_MIN, AMOUNT_MAX} from '../../helpers/config';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import validNewCredit from '../../api/credits/validNewCredit';
import createCredit from '../../api/credits/createCredit';
import addUser from '../../api/users/addUser';
import getUser from '../../api/users/getUser';
import {UserData, User} from '../../models/user';
import {CreditData, Credit} from '../../models/credit';
import {generateRandom} from '../../helpers/isCreditApproved';
import { useDispatch } from 'react-redux';
import { defaultState } from "../../redux/state";

const AddUser = () => {
  const [range, setRange] = React.useState(AMOUNT_MIN);
  const [date, setDate] = React.useState(new Date());
  const { register, errors, handleSubmit } = useForm<UserData>();
  const dispatch = useDispatch();

  const onSubmit = async (data: UserData) => {
    if (range <= AMOUNT_MAX && range >= AMOUNT_MIN) {
      let foundUser;
      try {
        foundUser = await getUser(data.document);  
      } catch (error) {
        console.log('error :>> ', error);
      }
      if (foundUser && foundUser.data && foundUser.data.length > 0 ) {
        const resCredit = await validNewCredit(foundUser.data[0].id);
        const credits: [Credit] = resCredit.data;
        if (credits.length > 0) {
          CreateCredit(foundUser.data[0].id, true);
        } else {
          const creditData: CreditData = {
            amount: range,
            status: false,
            createdAt: new Date(),
            userId: foundUser.data[0].id,
            dateToPay: date,
            statusPayCredit: false,
            reason: 'Este usuario no puede solicitar creditos'
          };
          createCredit(creditData);
          ToastsStore.error("Este usuario no puede solicitar creditos");
        }
        return;
      }
      
      // Genera aleatoriamente la aprobacion del credito
      const statusCredit = generateRandom();
      const userData: UserData = {
        ...data
      }
      const res = await addUser(userData);

      if (res && res.data && res.data.id) {
        CreateCredit(res.data, statusCredit);
      } else {
        ToastsStore.error("Error inseperado");
      }
    } else {
      ToastsStore.error("Seleccione un monto valido");
    }
  };

  const CreateCredit = (user: User, statusCredit: boolean) => {
    if (statusCredit) {
      ToastsStore.success("El credito ha sido aprobado");
      dispatch({type: 'DECREMENT_BANK_AMOUNT', value: range}); // Actualizar fondos del banco
    } else {
      ToastsStore.error("El credito ha sido rechazado");
    }
    const creditData: CreditData = {
      amount: range,
      status: statusCredit,
      createdAt: new Date(),
      userId: user.id,
      dateToPay: date,
      statusPayCredit: false,
      reason: 'aprobada'
    };
    createCredit(creditData);
    
  }

  const SetRange = (newRange: any) => {
    setRange(newRange);
  }
  const SetDate = (newDate: any) => {
    setDate(new Date(newDate))
  }
  return (
    <form className="Box" onSubmit={handleSubmit(onSubmit)}>
        <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore}/>
        <h1>Registro</h1>
        {"Nombre"}
        <input
          name="name"
          type="text"
          ref={register({ required: true })}/>
        <div style={{marginTop: '1em', color: "#ff4e4e"}}>{errors.name && "El nombre es requerido"}</div> 
        {"Correo"}
        <input
          name="email"
          type="text"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Correo invalido"
            }
          })}/>
        <div style={{marginTop: '1em', color: "#ff4e4e"}}>{errors.email && "El correo es requerido"}</div> 
        {"Cédula"}
        <input
          name="document"
          type="text"
          ref={register({ required: true, maxLength: 10 })}/>
        <div style={{marginTop: '1em', color: "#ff4e4e"}}>{errors.document && "La Cédula es requerido"}</div> 
        {"Monto del credito"}
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
          <div style={{marginTop: '1em'}}>{"Fecha para el pago"}</div> 
        <DatePicker
          onChange={newDate => {SetDate(newDate)}}
          value={date}
        />
        <input type="submit" value="Crear usuario" ></input>
    </form>
  );
};

export default AddUser;
