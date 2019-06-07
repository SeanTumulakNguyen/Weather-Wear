let weatherView = document.getElementById('weather-view')
let clothingView = document.getElementById('clothing-view')

document.getElementById('submit').onclick = function() {
    let genderInput = document.getElementsByName('gender').value
    let zipCodeInput = document.getElementById('zipcode-input').value
    let dateTravel = document.getElementsByName('date').value

    console.log('Gender Chosen: ' + genderInput)
    console.log('Zipcode Typed: ' + zipCodeInput)
    console.log('Date Value Chosen: ' + dateTravel)
}

let temp
let precipChance
let precipType // this is from openweatherapi on type of precip. rain or snow?

let clothesfromTemp = function () {
    if (temp >= 70) {
        console.log('Is is 70 degrees or more')
    } else if (temp < 70 && temp >= 50) {
        console.log('It is between 50 and 70 degrees')
    } else if (temp < 50) {
        console.log('Is it below 50 degrees')
    }
}

let accessoriesrfromPrecip = function () {
    if (precipChance >= 60 && precipType === 'snow') {
        console.log('There is a great chance it will snow')
    } else if (precipChance >= 60 && precipType === 'rain') {
        console.log('There is a great chance it will rain')
    } else if (precipChance < 60 && precipChance >= 30 && precipType === 'snow') {
        console.log('Chance of slush, flutters, and needing to shovel snow')
    } else if (precipChance < 60 && precipChance >= 30 && precipType === 'rain') {
        console.log('Bring an umbrella just in case')
    } else {
        console.log('We may be freezing')
    }
}
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

        //create new table row
        var newRow = document.createElement("tr");
        //create new data cells in row
        var newDataTemp = document.createElement("td");
        var newDataCond = document.createElement("td");
        //create variables to append to data cells
        var temp = document.createTextNode(dayOne.main.temp);
        var cond = document.createTextNode(dayOne.weather[0].description);
        //append variables to data cells
        newDataTemp.appendChild(temp);
        newDataCond.appendChild(cond);
        //append data cells to row
        newRow.appendChild(newDataTemp);
        newRow.appendChild(newDataCond);

        //this.list[5]
    }

    //If Day 2 is selected...
    else if(value === 1){
        var dayTwo = response.list[13]

    }

    //If Day 3 is selected...
    else if(value === 2){
        var dayThree = response.list[21]

    }

    //if Day 4 is selected...
    else if(value === 3){
        var dayFour = response.list[29]

    }

    //if Day 5 is selected...
    else if(value === 4){
        var dayFive = response.list[37]

    }

            // //create new row
            // var newRow = $("<tr>").append(
            //     $("<td>").text(trainName),
            //     $("<td>").text(dest),
            //     $("<td>").text(freq),
            //     $("<td>").text(nextArrival),
            //     $("<td>").text(minutesAway)
            // );
    
            // $("#train-table").append(newRow);

//What am I appending to? #weather-view

};
