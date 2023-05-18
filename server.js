const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())
app.use(express.json())


const {getDeals,addEmail} = require("./controller")

app.get("/deals", getDeals)
app.post("/emails", addEmail)

app.get('*', express.static(__dirname + "/public"))
app.listen(4500, () => {
    console.log("Listening on port 4500")
})
