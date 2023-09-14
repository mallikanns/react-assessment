import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from 'axios';

function HomeUser() {
  const [members,setMembers] = useState([]);

  useEffect(()=>{
    const getData = async () => {
    const response = await axios.get('https://jsd5-mock-backend.onrender.com/members')
      setMembers(response.data)
    }
    getData();
  },[]);

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="header">
          Generation Thailand
          <br />
          Home - User Sector
        </h1>
        <Link to="/user">
          <button className="home-button">User Home Sector</button>
        </Link>
        <Link to="/admin">
          <button className="home-button">Admin Home Sector</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member)=> (
              <tr>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeUser;
