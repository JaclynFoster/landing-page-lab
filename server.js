const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.get('*', express.static(__dirname + "/"))

const {getDeals} = require("./controller")

app.get("/deals", getDeals)

app.listen(4500, () => {
    console.log("Listening on port 4500")
})
