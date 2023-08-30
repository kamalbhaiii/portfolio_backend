const express = require("express");
const morgan = require("morgan");
const util = require("./helpers/util");
const userRouter = require("./api/v1/users/route");

const app = express();

// middleware
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/v1/user", userRouter)

app.get("/api/v1", (req, res) => {
    return res.send(util.apiResponse(1, "Server is live."))
})

module.exports = app;