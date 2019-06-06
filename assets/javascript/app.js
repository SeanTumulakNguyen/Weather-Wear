// variable for HTML form for gender preferences
let genderInput = document.getElementById('#').value
// variable for HTML form for zipcode location
let locationInput = document.getElementById('#zipcode-input').value

let weatherView = document.getElementById('#weather-view')
let clothingView = documet.getElementById('#clothing-view')

document.onclick('#submit', function() {

})

let temp
let precipChance
let precipType = // this is from openweatherapi on type of precip. rain or snow?

let clothesfromTemp = function() {
    if (temp >= 70) {
        console.log('Is is 70 degrees or more')
    }
    else if (temp < 70 && temp >= 50) {
        console.log('It is between 50 and 70 degrees')
    }
    else (temp < 50) {
        console.log('Is it below 50 degrees')
    }
}

let accessoriesrfromPrecip = function () {
    if (precipChance >= 60 && precipType === 'snow') {
        console.log('There is a great chance it will snow')
    }
    else if (precipChance >= 60 && precipType === 'rain') {
        console.log('There is a great chance it will rain')
    }
    else if (precipChance < 60 && precipChance >= 30 && precipType === 'snow') {
        console.log('Chance of slush, flutters, and needing to shovel snow')
    }
    else if (precipChance < 60 && precipChance >= 30 && precipType === 'rain') {
        console.log('Bring an umbrella just in case')
    }
    else {
        console.log('We may be freezing')
    }
}