const app = require("./server/app")
const config = require(`./config/env/${process.env.NODE_ENV}.json`)
require("./config/database/db.connection")

app.listen(config.api.port, () => {
    console.log(`Server is live on port ${config.api.port}`)
})