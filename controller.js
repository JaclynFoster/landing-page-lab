// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

let deals = [
{
    id: 1,
    name: "Muscovy Ducks",
    imageUrl: "/images/muscovy.jpg",
    price: 20
},
{
    id: 2,
    name: "Pygmy Goats",
    imageUrl: "/images/goat.jpg",
    price: 50
},

{
    id: 3,
    name: "Plymouth Barred Rocks",
    imageUrl: "/images/chicken.jpg",
    price: 10
},
{
    id: 4,
    name: "Toulouse Goose",
    imageUrl:"/images/goose.jpg",
    price: 75
},
{
    id: 5,
    name: "Black Soldier Fly (per lb)",
    imageUrl: "/images/fly.jpg",
    price: 20
}
]

let emails = [
{
    id: 1,
    email: "thisemail@email.com",
    receiveUpdates: true
}

]

let emailId = 2;

try{
    nonExistentFunction()
} catch (error) {
    rollbar.critical("error")
}

const getDeals = (req, res) => {
    rollbar.info("Deals requested")
    res.status(200).send(deals)
}

const addEmail = (req, res) => {
    const {email, receiveUpdates} = req.body
    let newEmail = {
        email,
        receiveUpdates,
        id: emailId
    }
 
    emails.push(newEmail)
    rollbar.info("email added to list")
    res.sendStatus(200)
    emailId++
}

module.exports = {getDeals, addEmail}