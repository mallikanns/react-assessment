import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from 'axios';
import Layout from "./Layout";

let mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

function HomeUser() {
  const [members,setMembers] = useState([]);
  const [data, setData] = useState([]);

  useEffect(()=>{
    const getData = async () => {
    const response = await axios.get('https://jsd5-mock-backend.onrender.com/members')
    setData([...mockEmployees, ...response.data]);
      // setMembers(response.data)
    }
    getData();
  },[]);

  return (
    <Layout>
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
          {data.map((member)=> (
              <tr>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default HomeUser;
