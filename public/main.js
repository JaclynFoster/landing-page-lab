let dealContainer = document.querySelector("#deal-section")
let emailContainer = document.querySelector("#email-container")
let emailInput = document.querySelector(".email-input")
let checkbox = document.querySelector(".checkbox")
let emailBtn = document.querySelector(".email-btn")

const baseURL = "http://34.203.205.252:4500/"

const showDeals = (deal) => {
    console.log('the deal is: ', deal)
    let dealDiv = document.createElement('div')
    let buyBtn = document.createElement('button')
    let dealName = document.createElement('h2')
    let dealImage = document.createElement('img')
    let dealPrice = document.createElement('h3')
    dealDiv.classList.add("deal-div")
    buyBtn.classList.add("buy-btn")
    dealName.classList.add("deal-name")
    dealPrice.classList.add("deal-price")
    dealImage.classList.add("deal-image")
    dealName.textContent = deal.name
    dealImage.src = deal.imageUrl
    dealPrice.textContent = "Price: $" + deal.price
    buyBtn.textContent = "Buy Now"
    buyBtn.onclick = () => {
        alert("Yay! Added to Cart!")
    }
    dealDiv.appendChild(dealName)
    dealDiv.appendChild(dealImage)
    dealDiv.appendChild(dealPrice)
    dealDiv.appendChild(buyBtn)
    dealContainer.appendChild(dealDiv)
}

const getDeals = () => {
    axios.get(`/deals`)
    .then((response) => {
        console.log("My response : ", response)
        for(let i = 0; i < response.data.length; i++) {
            showDeals(response.data[i])
        }
    })
    .catch((error) => {
        console.log("Error", error)
    })
}
getDeals()



const addNewEmail = (e) => {
    e.preventDefault()
    axios.post(`/emailList`, {
        email: emailInput.value,
        receiveUpdates: checkbox.value
    })
    .then((response) => {
        rollbar.warning("values did not change")
       (emailInput.value = ""),
       (checkbox.value = "")
       console.log(response.data)

    })
    .catch((error) => {
        console.log("Error", error)
    })

}

emailContainer.addEventListener("submit", addNewEmail)