import * as React from "react";
import "./Title.css";
import {
  Link
} from "react-router-dom";

const Title = () => {
  return (
    <div className="title">
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><h1 >Zinobe</h1></Link>
    </div>
  );
};

export default Title;
