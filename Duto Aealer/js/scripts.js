const hambergerElement = document.querySelector("#myButton")
const navElement = document.querySelector(".menuLinks")

hambergerElement.addEventListener("click", () => {
    hambergerElement.classList.toggle("open")
    navElement.classList.toggle("open")
})

// Reviews

import {reviews} from "../js/reviews.js"
console.log(reviews)

const cardDiv = document.querySelector(".cards")

for (let x = 0; x < reviews.length; x++) {
    const reviewCard = document.createElement("section")
    const reviewName = document.createElement("h3")
    reviewName.textContent = reviews[x].name
    
    const reviewText = document.createElement("p")
    reviewText.textContent = reviews[x].text

    const reviewRating = document.createElement("div")

    for (let i = 1; i < reviews[x].stars; i++) {
        const starImg = document.createElement("img")
        starImg.src = "../images/star.svg"
        reviewRating.appendChild(starImg)
    }

    // building the card
    reviewCard.appendChild(reviewName)
    reviewCard.appendChild(reviewRating)
    reviewCard.appendChild(reviewText)
    cardDiv.appendChild(reviewCard)
}