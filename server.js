const express = require("express")
const app = express()
app.use(express.json())

app.use(express.static(__dirname + "/public"))


app.listen(4500, () => {
    console.log("Listening on port 4500")
})