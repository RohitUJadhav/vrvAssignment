import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RUsers from "./rUsers";

function CreateRole() {
const[role,setRole] = useState()
const navigate = useNavigate()

const  Submit = (e) =>{
  e.preventDefault();
  axios.post("http://localhost:3001/createRole",{role})
  .then(result => {console.log(result)
    navigate('/')
  })
  .catch(err => console.log(err))
}


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form  onSubmit={Submit}>
           <h2>Add Role</h2>
          <div className="mb-2">
            <label>Role </label>
           
            <input
              type="text"
              placeholder="Enter Role"
              className="form-control"
              onChange={(e) => setRole(e.target.value)} />
          </div>

          {/* <div className="mb-2">
            <label>Permission :  </label>
            <input type="checkbox" name="check" value={"Read"} id="read" /> Read
            <input type="checkbox" name="check" value={"Write"} id="write" /> Write
            <input type="checkbox" name="check" value={"Delete"} id="delete" /> Delete
          </div> */}


          <button className="btn btn-danger">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateRole;