import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "./style.css"

const Add = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/users", user);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div>
        <Nav/>
      <h1 style={{textAlign:"center"}}>Add New user</h1>
      <div className="form">
      <input
      className="ip"
        type="text"
        placeholder="first name"
        name="firstName"
        onChange={handleChange}
      />
      <input
        className="ip"
        type="text"
        placeholder="last name"
        name="lastName"
        onChange={handleChange}
      />
      <input
      className="ip"
        type="text"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
      className="ip"
        type="text"
        placeholder="address"
        name="address"
        onChange={handleChange}
      />
      <button onClick={handleClick} className="ip add">Add</button>
      {error && "Something went wrong!"}
      </div>
    </div>
  );
};

export default Add;