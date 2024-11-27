import React, { useState } from "react";
import Creatuser from "../components/userMgmt/CreateUser";
import Users from "../components/userMgmt/Users";
import UpdateUser from "../components/userMgmt/UpdateUser";
import RUsers from "../components/roleMgmt/rUsers";
import '../style/tailwind.css'

const btnmgmt = {
  margin : "15px"
};

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="dashboard">
      {/* Navigation Bar */}
      <nav className=" navbar navbar-dark bg-dark nav justify-content-center ">
        <button style={btnmgmt}
          className={`btn btn-outline-success ${
            activeTab === "users"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("users")}
        >
          User Management
        </button>


        <button
          className={`btn btn-outline-success  ${
            activeTab === "RUsers"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("RUsers")}
        >
          Role Management
        </button>
      </nav>

      {/* Content Section */}
      <div className="dashboard-content p-6">
        {activeTab === "users" ?  (
          <>
          <Users /> 
         
          </>
          
        ) : (
          // Replace this with your Role Management component
          
          <div>
            <RUsers/>

            Role Management Content
            
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Dashboard;
