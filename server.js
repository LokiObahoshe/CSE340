const express = require("express")
const app = express()

const HOST = "localhost"
const PORT = 3000

app.listen(PORT, () => {
    console.log(`trial app listening on ${HOST}:${PORT}`)
})