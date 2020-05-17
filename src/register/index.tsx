import * as React from "react";
import "./register.css";

const Register = () => {
  const [count, setCount] = React.useState(0);

  return (
    <form className="Box" method="POST">
        <h1>Registro</h1>
        <input type="text"placeholder="Nombre"/>
        <input type="password" placeholder="Clave"/>
        <input type="text" placeholder="Cédula"/>
        <input type="Monto" placeholder="Clave"/>
        <input type="Fecha para el pago" placeholder="Clave"/>
        <input type="password" placeholder="Clave"/>
        <input type="submit"value="Login" ></input>
    </form>
  );
};

export default Register;
