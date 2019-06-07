
// variable for HTML form for gender preferences
// let genderInput = document.getElementById('#').value
// variable for HTML form for zipcode location
// <<<<<<< Javascript
// let locationInput = document.getElementById('#zipcode-input').value

// let weatherView = document.getElementById('#weather-view')
// let clothingView = documet.getElementById('#clothing-view')

// document.onclick('#submit', function() {

// })
// =======
// let locationInput = document.getElementById('#').value
// >>>>>>> Develop

// let temp
// let precipChance
// let precipType = // this is from openweatherapi on type of precip. rain or snow?

// <<<<<<< Javascript
//     let clothesfromTemp = function () {
//         if (temp >= 70) {
//             // it's hot shorts and t-shirts
//         } else if (temp < 70 && temp >= 50) {
//             // fall weather get a bit of clothes on
//         } else(temp < 50) {
//             // tryin' to eat some frostbite boi?
//         }
//     }
// =======
// let clothesfromTemp = function() {
//     if (temp >= 70) {
//         // it's hot shorts and t-shirts
//     }
//     else if (temp < 70 && temp >= 50) {
//         // fall weather get a bit of clothes on
//     }
//     else (temp < 50) {
//         // tryin' to eat some frostbite boi?
//     }
// }
// >>>>>>> Develop

//let accessoriesrfromPrecip = function () {
//    if (precipChance >= 60 && precipType === 'snow') {
        // get your milk, eggs, and bread
// <<<<<<< Javascript
//     } else if (precipChance >= 60 && precipType === 'rain') {
//         // keep umbrella on you
//     } else if (precipChance < 60 && precipChance >= 30 && precipType === 'snow') {
//         // shovels and slush
//     } else if (precipChance < 60 && precipChance >= 30 && precipType === 'rain') {
//         // bring umbrella just in case
//     } else {
// =======
//     }
//     else if (precipChance >= 60 && precipType === 'rain') {
//         // keep umbrella on you
//     }
//     else if (precipChance < 60 && precipChance >= 30 && precipType === 'snow') {
//         // shovels and slush
//     }
//     else if (precipChance < 60 && precipChance >= 30 && precipType === 'rain') {
//         // bring umbrella just in case
//     }
//     else {
// >>>>>>> Develop
        // bruh you good
//    }
//}





//************************************** Nick's Open Weather API******************************** */

//When the submit button is clicked - get the zip code value and call Open Weather Search API
document.getElementById("submit").onclick = function() {
    event.preventDefault();

    console.log("Submit Button Clicked - Zip Code Obtained!")

    var zipInput = document.getElementById("zipcode-input").value;
    
    //previousSearches.push(zipInput) - we can add a firebase and display recent searches!?!?!?
    
    getWeather(zipInput);
}

//Call API and search for requested giphy
function getWeather(zipcode) {
    console.log("Open Weather API Search Enabled! Yeet!")
    console.log(zipcode)

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + "&appid=37857072468d87a5127698015d17b9e0"
    
    $.ajax({
        url: queryURL,
        method: "GET"
        })
    .done(function(response){
            displayWeather(response);
        })
}

//Display weather information
function displayWeather(response) {
    console.log("Display Weather Function Enabled")
    console.log("This is the response (below)")
    console.log(response)

    document.getElementById("weather-view").empty;
    
    //Apending weather information to the HTML
    //If Day 1 is selected...
    if(value === 1){
        var dayOne = response.list[5]

        console.log(dayOne.main.temp)
        console.log(dayOne.weather[0].description)
        console.log(dayOne.weather[0].id)

    }

    //If Day 2 is selected...
    else if(value === 1){
        var dayTwo = response.list[13]

    }

    //If Day 3 is selected...
    else if(value === 1){
        var dayThree = response.list[21]

    }

    //if Day 4 is selected...
    else if(value === 1){
        var dayFour = response.list[29]

    }

    //if Day 5 is selected...
    else if(value === 1){
        var dayFive = response.list[37]

    }

//What am I appending to? #weather-view

};
