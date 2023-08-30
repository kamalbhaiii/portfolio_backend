const userRouter = require("express").Router();
const User = require("./controller")

userRouter.get("/:userId", User.index)

module.exports = userRouter