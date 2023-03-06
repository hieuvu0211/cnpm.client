import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import Nav from "./Nav";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/users");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(users);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/users/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Nav />
      <h1 style={{textAlign:"center"}}>User Information</h1>
      <div className="books">
      
        <table className="container">
          <thead>
            <tr>
              
              <th>firstName</th>
              <th>lastName</th>
              <th>Email</th>
              <th>Address</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 && users.map(item => (
              <tr key={item.id}>
                
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                  <Link
                    to={`/detail/${item.id}`}
                  >
                    <button className="delete">Detail</button>
                  </Link>
                  <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                  <Link
                    to={`/update/${item.id}`}
                  >
                    <button>Update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
        
    </div>
  );
};

export default Users;