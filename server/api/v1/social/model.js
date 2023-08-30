const mongoose = require("mongoose")

const socialSchema = new mongoose.Schema({
    "facebook": mongoose.Schema.Types.String,
    "instagram": mongoose.Schema.Types.String,
    "github": mongoose.Schema.Types.String,
    "discord": mongoose.Schema.Types.String,
    "telegram": mongoose.Schema.Types.String,
    "snapchat": mongoose.Schema.Types.String
}, {
    timestamps: true
})

const Social = mongoose.model("Social", socialSchema)

module.exports = Social;