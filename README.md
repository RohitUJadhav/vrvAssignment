## User Management Role Based Access Control System
A modern and reasponsive Role Based Access Control System built with **ReactJs, Node.Js, Express.Js, MongoDB** 
It allow you to manager user and roles in a table format with the ability to **Add, Update and Delete users and role.** Each user has a name,email, role & Status (active/inactive). The app store the user data in MongoDB.

## Features
* **Add users** - You can easily add new users by filling out a form with their name, email, and role. The email is validated to ensure it's in the  correct format before saving.
* **Edit users** -  Existing users can be edited by clicking the "Edit" button in the user table. The form pre-fills with the user's details, and you    can  modify them.
* **Delete users** - You can delete users directly from the user table, which will permanently remove them from the system.
* **Add Role** - Add new role in role management panel

## 🚀 Technical Implementation
* **React** for building UI
* **Axios** for API comunication
*  **MongoDB** for store user data
*  **Tailwind CSS** for styling and responsiveness


  ## 🚀 Running Locally
Before you begin, ensure you have the following installed:
* Node.js (v16.0.0 or higher)
* npm (v8.0.0 or higher)

###  Step 1: Clone the Repository
https://github.com/RohitUJadhav/vrvAssignment.git
cd vrvAssignment 

### Step 2: Install Dependencies
cd client  -> npm install

cd server -> npm install

### Step 3: Start Development Server
cd client -> npm run dev

cd server -> nodemon

## Interacting with the Application
* Initally create a role that can eventually be assigned to any User.
* Adding Users: Click on the designated "Add User" button to add a new user.
* Editing Users: Locate the "Edit" button next to a user's record in the table and click it to modify details, including their role.
* Deleting Users: Click the corresponding "Delete" button to permanently remove a user.
* Role Management: When adding  Role, you can assign a specific role. This helps to control the access and permissions for each user.

