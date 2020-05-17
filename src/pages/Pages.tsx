import * as React from "react";
import { FaUser } from 'react-icons/fa';
import {
  Link
} from "react-router-dom";

const Pages = () => {

  return (
    <>
      <div className="container">
        <div className="pages-container">
          <div className="box-container">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/users"><h3> Usuarios <FaUser /> </h3></Link>
          </div>
          <div className="box-container">
            <h3> Creditos <FaUser /> </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
