import * as React from "react";
import { FaUser, FaTimes, FaPlus, FaList } from 'react-icons/fa';
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import AddUser from "./addUser";
import {
  Link
} from "react-router-dom";

const Users = () => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <AddUser/>
      <div 
        style={{
          cursor: 'pointer',
          backgroundColor: '#444444',
          width: '30px',
          height: '30px',
          borderRadius: '25px',
          position: 'relative',
          left: '65%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      onClick={hideModal}><FaTimes /> </div>
    </ReactModal>
  ));
  return (
    <>
      <div className="container">
        <div className="pages-container">
          <div className="box-container" onClick={showModal}>
            <h3> Crear Usuario <FaPlus /> </h3>
          </div>
          
          <div className="box-container">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/list-users"><h3> Lista de usuarios <FaList /> </h3></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
