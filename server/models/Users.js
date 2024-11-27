const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Status : {type : String, required: true},
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'roles' },

});


const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel