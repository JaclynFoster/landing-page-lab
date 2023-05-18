// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '31cfbd0a29374ebea5dd7e3756162a1f',
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

let emailList = [
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
    rollbar.error("error")
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
    if (email.value === "") {
        rollbar.warning("Value of email is empty")
        alert("Please add email")
    } else {
    emailList.push(newEmail)
    rollbar.info("email added to list")
    res.status(200).send(() => {
        rollbar.info("email successfully added")
        alert("Thank you for joining the family!")
    })}
    emailId++
}

module.exports = {getDeals, addEmail}