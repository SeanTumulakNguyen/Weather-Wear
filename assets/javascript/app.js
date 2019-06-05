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

    let clothesfromTemp = function () {
        if (temp >= 70) {
            // it's hot shorts and t-shirts
        } else if (temp < 70 && temp >= 50) {
            // fall weather get a bit of clothes on
        } else(temp < 50) {
            // tryin' to eat some frostbite boi?
        }
    }

let accessoriesrfromPrecip = function () {
    if (precipChance >= 60 && precipType === 'snow') {
        // get your milk, eggs, and bread
    } else if (precipChance >= 60 && precipType === 'rain') {
        // keep umbrella on you
    } else if (precipChance < 60 && precipChance >= 30 && precipType === 'snow') {
        // shovels and slush
    } else if (precipChance < 60 && precipChance >= 30 && precipType === 'rain') {
        // bring umbrella just in case
    } else {
        // bruh you good
    }
}