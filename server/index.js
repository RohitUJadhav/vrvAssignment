const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const RoleModel = require('./models/Roles');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

// Fetch all users with populated roles
app.get('/', async (req, res) => {
    try {
        const users = await UserModel.find().populate('role'); // Populate role details
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch a specific user by ID
app.get('/getUser/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).populate('role');
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update user by ID
app.put("/updateUser/:id", async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                Status: req.body.Status,
                role: req.body.role, // Allow updating role
            },
            { new: true } // Return the updated document
        ).populate('role');
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete user by ID
app.delete('/deleteUser/:id', async (req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new user
app.post("/createUser", async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new role
app.post("/createRole", (req, res) =>{
    RoleModel.create(req.body)
    .then(roles => res.json(roles))
    .catch(err => res.json(err))

})

// Fetch all roles
app.get("/roles", async (req, res) => {
    try {
        const roles = await RoleModel.find(); // Fetch all roles from the database
        res.status(200).json(roles); // Return roles as JSON
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
