import * as React from "react";
import { FaUser } from 'react-icons/fa';

const ListUsers = () => {

  return (
    <>
      <div className="container">
        <div className="pages-container">
          <div className="box-container">
            <h3> Crear Usuario <FaUser /> </h3>
          </div>
          <div className="box-container">
            <h3> Lista de Usuarios <FaUser /> </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUsers;
