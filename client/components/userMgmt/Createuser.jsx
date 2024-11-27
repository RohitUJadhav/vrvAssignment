import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Creatuser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Status, setStatus] = useState("");
  const [role, setRole] = useState(""); 
  const [roles, setRoles] = useState([]); 

  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get("http://localhost:3001/roles")
      .then((response) => setRoles(response.data))
      .catch((error) => console.log("Error fetching roles:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send user data to the backend
    axios.post("http://localhost:3001/createUser", { name, email, Status, role })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));

  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Add User</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Role</label>
            <select
              className="form-control"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value="">Select a Role</option>
              {roles.map((role) => (
                <option key={role._id} value={role._id}>
                  {role.role}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label>Status : </label>
            <input
              type="radio"
              name="status"
              value="Active"
              onChange={(e) => setStatus(e.target.value)}
            />
            Active
            <input
              type="radio"
              name="status"
              value="Inactive"
              onChange={(e) => setStatus(e.target.value)}
            />
            Inactive
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Creatuser;
