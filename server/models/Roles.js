const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    unique: true, // Prevent duplicate roles
    trim: true,   // Removes leading/trailing whitespace
  },
  
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the creation date
  },
});

// Create the model from the schema
const RoleModel = mongoose.model('roles', RoleSchema); // Used 'Role' as the model name for consistency
module.exports = RoleModel;
