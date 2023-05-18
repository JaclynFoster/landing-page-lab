let deals = [
{
    id: 1,
    name: "Muscovy Ducks",
    imageUrl: "/public/images/muscovy.jpg",
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

const getDeals = (req, res) => {
    res.status(200).send(deals)
}

module.exports = {getDeals}