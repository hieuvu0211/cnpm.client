import axios from "axios";
import React, { useState, useEffect } from "react";
import {useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [user, setUser] = useState({
    firtName: "",
    lastName: "",
    email: "",
    address: "",
  });
  const [error,setError] = useState(false);
  const [loading, setLoading] = useState();
  const [prevData, setPrevData] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.pathname.split("/")[2];

  
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/edit-user/${userId}`);
        setLoading(res.data);
        console.log("----> loading = ",typeof( loading), ":", loading[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);


  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/users/${userId}`, user);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
    <div className="containerUpdate">
    <div className="form">
      <h1>Update the user</h1>
      <button onClick={() => setPrevData(!prevData)} className="add">Show Previous Data</button>

      <input
      className="up"
        type="text"
        placeholder="user title"
        name="firstName"
        onChange={handleChange}
      />
      <input
      className="up"
        type="text"
        placeholder="user desc"
        name="lastName"
        onChange={handleChange}
      />
      <input
      className="up"
        type="text"
        placeholder="user price"
        name="email"
        onChange={handleChange}
      />
      <input
      className="up"
        type="text"
        placeholder="user address"
        name="address"
        onChange={handleChange}
      />
      <button onClick={handleClick} className="add up">Update</button>
      {error && "Something went wrong!"}
    </div>
    {prevData && (
      <div className="prevUser">
      <h4 className="prevUserC">{loading && loading[0].firstName}</h4>
      <h4 className="prevUserC">{loading && loading[0].lastName}</h4>
      <h4 className="prevUserC">{loading && loading[0].email}</h4>
      <h4 className="prevUserC">{loading && loading[0].address}</h4>
  </div>
    )}
    
    </div>
    </>
    
  );
};

export default Update;