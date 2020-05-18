import * as React from "react";
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const testArray = [
  {
    "name": "Mayerson Julio Jiménez Contreras",
    "email": "mayersonjimenez@aol.com",
    "document": "1094835231",
    "id": 1
  }
]

const ListUsers = () => {

  return (
    <> 
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
          testArray.map((item) => {
            return (<tr>
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
