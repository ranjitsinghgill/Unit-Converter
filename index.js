

let convertBtn = document.getElementById("convert-btn")
let unitText = document.getElementById("unit-text")
let lengthP = document.getElementById("length-p")
let volumeP = document.getElementById("volume-p")
let massP = document.getElementById("mass-p")

lengthP.textContent = `0 meters = 0 feet |
    0 feet = 0 meters`

volumeP.textContent = `0 liters = 0 gallons |
    0 gallons = 0 liters`

massP.textContent = `0 kilos = 0 pounds |
    0 pounds = 0 kilos`

convertBtn.addEventListener("click", function(){
        feetToMeters()
        gallonsToLiters()
        poundsToKilos()
})

function feetToMeters() {
    let feetR = ((parseInt(unitText.value) * 3.28084).toFixed(3))
    let metersR = ((parseInt(unitText.value) * 0.304).toFixed(3))
    let feetMeters = `${unitText.value} meters = ${feetR} feet |
    ${unitText.value} feet = ${metersR} meters`
    lengthP.textContent = feetMeters
}

function gallonsToLiters() {
    let gallonsR = ((parseInt(unitText.value) * 0.264172).toFixed(3))
    let litersR = ((parseInt(unitText.value) * 3.785412).toFixed(3))
    let gallonsLiters = `${unitText.value} liters = ${gallonsR} gallons |
    ${unitText.value} gallons = ${litersR} liters`
    volumeP.textContent = gallonsLiters
}

function poundsToKilos() {
    let poundsR = ((parseInt(unitText.value) * 2.2).toFixed(3))
    let kilosR = ((parseInt(unitText.value) * 0.45359237).toFixed(3))
    let poundsKilos = `${unitText.value} kilos = ${poundsR} pounds |
    ${unitText.value} pounds = ${kilosR} kilos`
    massP.textContent = poundsKilos
}

