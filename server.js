const express = require("express")
const cors = require("cors")
const app = express()
const {rollbar} = process.env

app.use(cors())
app.use(express.json())

app.get('*', express.static(__dirname + "/public"))

const {getDeals,addEmail } = require("./controller")

app.get("/deals", getDeals)
app.post("/emailList", addEmail)

app.listen(4500, () => {
    console.log("Listening on port 4500")
})
