import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
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


function HomeAdmin() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [data, setData] = useState([]);
//   const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setData([...mockEmployees, ...response.data]);
    //   setMembers(response.data);
    };
    getData();
  }, []);

  const createData = async (name, lastname, position) => {
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      {
        id: uuidv4(),
        name: name,
        lastname: lastname,
        position: position,
      }
    );
    console.log(response)
    if (response.status === 200) {
        setName("");
        setLastname("");
        setPosition("");
    }
  };

  const deleteData = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );
    console.log(response)
    // if (response.status === 200) {
    //   setReload(!reload);
    // }
    // console.log(response);
  };

  return (
    <Layout>
      <div>
        <h1 className="header">
          Generation Thailand
          <br />
          Home - Admin Sector
        </h1>
        <Link to="/user">
          <button className="home-button">User Home Sector</button>
        </Link>
        <Link to="/admin">
          <button className="home-button">Admin Home Sector</button>
        </Link>
      </div>
      <div>
        <h2>Create User Here</h2>
        <br />
        <form>
          <input
            type="text"
            placeholder="Name"
            value={name}
            className="text"
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            className="text"
            onChange={(ev) => setLastname(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            className="text"
            onChange={(ev) => setPosition(ev.target.value)}
          />
          <button
            className="save"
            onClick={() => createData(name, lastname, position)}
          >
            Save
          </button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.lastname}</td>
              <td>{member.position}</td>
              <td>
                <button onClick={()=>deleteData(member.id)} className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default HomeAdmin;
