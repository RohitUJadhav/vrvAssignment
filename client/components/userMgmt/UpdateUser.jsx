import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const btn = {
    margin: "10px"
};

function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Status, setStatus] = useState("");
    const [role, setRole] = useState(""); // To store the selected role
    const [roles, setRoles] = useState([]); // To store available roles
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data by ID
        axios.get('http://localhost:3001/getUser/' + id)
            .then(result => {
                setName(result.data.name);
                setEmail(result.data.email);
                setStatus(result.data.Status);
                setRole(result.data.role?._id); // Set current role of the user
            })
            .catch(err => console.log(err));

        // Fetch all available roles
        axios.get('http://localhost:3001/roles')
            .then(result => setRoles(result.data))
            .catch(err => console.log(err));

    }, [id]);

    const Update = (e) => {
        e.preventDefault();

        const userData = { name, email, Status, role }; // Include role in the data

        axios.put("http://localhost:3001/updateUser/" + id, userData)
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2 className="text-center">Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            placeholder="Enter mail"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="mb-2">
                        <label htmlFor="" style={btn}>Role: </label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-control"
                        >
                            <option value="">Select a Role</option>
                            {roles.map((roleItem) => (
                                <option key={roleItem._id} value={roleItem._id}>
                                    {roleItem.role}
                                </option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <div className="mb-2">
                        <label htmlFor="">Status: </label>
                        <input
                            type="radio"
                            name="status"
                            value="Active"
                            checked={Status === "Active"}
                            onChange={(e) => setStatus(e.target.value)}
                            style={btn}
                        /> Active
                        <input
                            type="radio"
                            name="status"
                            value="Not Active"
                            checked={Status === "Not Active"}
                            onChange={(e) => setStatus(e.target.value)}
                            style={btn}
                        /> Not Active
                    </div>
                    <br />
                    <div>
                        <button className="btn btn-success  d-grid gap-2 col-4 mx-auto">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
