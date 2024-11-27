import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function RUsers() {

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setRole(result.data)) // Store users with populated roles
      .catch((err) => console.log(err));
  }, []);

  


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <Link to="/createRole" className="btn btn-success">
          Add Role
        </Link>
      <table className="table">
          <thead>
            <tr>
              <th>Role</th>
              
              <th> Action</th>
            </tr>
          </thead>
          {
            roles.map((role) =>{
             return <tr>
                <td>{role.role}</td>
                <td> 
                  <button>Delete</button>
                </td>
              </tr>
            })
          }
       </table>
     
    </div>
    </div >
  )

}
export default RUsers;