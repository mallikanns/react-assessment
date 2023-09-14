import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Layout from "./Layout";

function HomeNormal() {
  return (
    <Layout>
      <div>
        <h1 className="header">
          Generation Thailand
          <br />
          React Assessment
        </h1>
        <Link to='/user'>
            <button className="home-button">User Home Sector</button>
        </Link>
        <Link to='/admin'>
            <button className="home-button">Admin Home Sector</button>
        </Link>
      </div>
    </Layout>
  );
}

export default HomeNormal;
