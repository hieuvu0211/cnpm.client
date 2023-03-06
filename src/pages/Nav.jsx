import "./style.css";
import { Link } from "react-router-dom";
import React from "react";
let Nav = () => {
  return (
    <>
      <ul>
        <li className="active">
          <Link to="/" className="link"><a>Home</a></Link>
        </li>
        <li>
          <Link to="/add" className="link">
            <a>Add new user</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Nav;
