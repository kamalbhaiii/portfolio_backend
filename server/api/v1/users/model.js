const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    profilePic: mongoose.Schema.Types.String,
    firstName: mongoose.Schema.Types.String,
    lastName: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    age: mongoose.Schema.Types.Number,
    residence: mongoose.Schema.Types.String,
    address: mongoose.Schema.Types.String,
    email: mongoose.Schema.Types.String,
    phone: mongoose.Schema.Types.String,
    resumeUrl: mongoose.Schema.Types.String,
    tags: [mongoose.Schema.Types.String]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User;