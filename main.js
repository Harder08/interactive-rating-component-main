let rates = document.querySelectorAll("li")
let storeHere = document.querySelector("#selected-value")
let submitBtn = document.querySelector("button")
let firstSec = document.querySelector(".rating")
let secondSec = document.querySelector(".thanking")
rates.forEach(ele => {
    ele.addEventListener("click", () => {
        let active = document.querySelector(".selected")
        if (active) {
            active.classList.remove("selected")
        }
        ele.classList.add("selected")
        console.log(ele)
        storeHere.textContent = ele.textContent

        submitBtn.addEventListener("click", (e) => {
            if (storeHere.textContent === "") {
                e.preventDefault()
            } 
            firstSec.classList.add("hide")
            secondSec.classList.remove("hide")
        })
    })
})

