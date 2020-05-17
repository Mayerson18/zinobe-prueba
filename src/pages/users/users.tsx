import * as React from "react";
import { FaUser } from 'react-icons/fa';
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import AddUser from "./addUser";

const Users = () => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <AddUser/>
      <button onClick={hideModal}>Salir</button>
    </ReactModal>
  ));
  return (
    <>
      <div className="container">
        <div className="pages-container">
          <div className="box-container" onClick={showModal}>
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

export default Users;
