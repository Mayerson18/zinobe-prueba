import * as React from "react";
import getCreditByUser from '../../api/credits/getCreditByUser';
import getAllUsers from '../../api/users/getAllUsers';
import { User } from "../../models/user";
import { Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import './listUser.css'
import { Credit } from "../../models/credit";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListUsers = () => {

  const [users, setUsers] = React.useState<User[]>([]);
  const [user, setUser] = React.useState<any>();
  const [credits, setCredits] = React.useState<Credit[]>([]);
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const GetAllUsers = async () => {
    const res = await getAllUsers();
    if (res.data) {
      setUsers(res.data);
    }
  }

  const GetCreditByUser = async (user: any) => {
    setUser(user);
    const res = await getCreditByUser(user.id);
    if (res.data) {
      setCredits(res.data);
    }
    toggle();
  }

  React.useEffect(() => {
    GetAllUsers();
  }, []);
  return (
    <>
      <Modal isOpen={modal} toggle={toggle} className="my-modal">
        <ModalHeader style={{color: 'black'}} toggle={toggle}>{user && user.name ? user.name: 'coki'}</ModalHeader>
        <ModalBody>
          <Table style={{backgroundColor: '#444444'}}>
            <thead>
              <tr style={{color: 'white'}}>
                <th>#</th>
                <th>Estado</th>
                <th>Monto</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody style={{color: 'white'}}>
              {
                credits.map((credit: Credit) => {
                  return (<tr key={credit.id} >
                    <th scope="row">{credit.id}</th>
                    <td>{credit.status ? 'aprobada' : 'denegada'}</td>
                    <td>{credit.amount}</td>
                    <td>{credit.createdAt}</td>
                  </tr>)
                })
              }
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
      <h1 style={{
        position: 'absolute',
        top: '2em',
        width: '100%',
        textAlign: 'center'
      }}>Usuarios</h1>
      <div className="container">
        <div style={{
          backgroundColor: '#444444',
          borderRadius: '5px',
          padding: '5% ',
          width: '100%',
          color: 'white'
        }}>
     <Table>
      <thead>
        <tr style={{color: 'white'}}>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Cédula</th>
        </tr>
      </thead>
      <tbody style={{color: 'white'}}>
        {
          users.map((item) => {
            return (<tr 
              key={item.id}
              className='tr'
              onClick={() => {GetCreditByUser(item)}}
            >
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.document}</td>
            </tr>)
          })
        }
      </tbody>
    </Table>
        </div>
      </div>
    </>
  );
};

export default ListUsers;
