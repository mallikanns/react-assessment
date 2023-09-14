import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function HomeNormal() {
  return (
    <>
      <Navbar />
      <div>
        <h1>
          Generation Thailand
          <br />
          React Assessment
        </h1>
        <Link to='/user'>
            <button>User Home Sector</button>
        </Link>
        <Link to='/admin'>
            <button>Admin Home Sector</button>
        </Link>
      </div>
    </>
  );
}

export default HomeNormal;
