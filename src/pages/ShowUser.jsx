import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./css/ShowUser.css";
import Nav from "./Nav";

const ShowUser = (props) => {
  const [user, setUser] = useState(["No Information"]);
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  console.log(userId);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/edit-user/${userId}`
        );
        setUser(res.data);
        await console.log("----> loading = ", typeof user, ":", user[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  return (
    <>
      <Nav />
      {/* <div classNameName="showUser">
            <h4>Identification: {user[0].id}</h4>
            <h4>First Name: {user[0].firstName}</h4>
            <h4>Last Name: {user[0].lastName}</h4>
            <h4>Email: {user[0].email}</h4>
            <h4>Address: {user[0].address}</h4>
        </div> */}

      <div className="flip-card al">
        <h1>User Information !</h1>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="https://toigingiuvedep.vn/wp-content/uploads/2022/04/hinh-meme-cheems-bat-ngo-chua.jpg"
              alt="Avatar"
              className="img-fluid"
            />
          </div>
          <div className="flip-card-back">
            <h4>Identification: {user[0].id}</h4>
            <h4>First Name: {user[0].firstName}</h4>
            <h4>Last Name: {user[0].lastName}</h4>
            <h4>Email: {user[0].email}</h4>
            <h4>Address: {user[0].address}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowUser;
