const mongoose = require("mongoose");
const config = require(`../env/${process.env.NODE_ENV}.json`)

mongoose.connect(config.database.url)
    .then(() => console.log("Connected with Database."))
    .catch((err) => console.log(err.message))