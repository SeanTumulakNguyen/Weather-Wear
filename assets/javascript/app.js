// divs for posting the weather and clothing suggestions
let weatherView = document.getElementById('weather-view')
let clothingView = document.getElementById('clothing-view')

//Global Variable
var dateInputValue;
var genderInputValue;
var temperature;
var weatherConditions;
var clothesChosen;
var genderChosen;

// submitBtn to pull values of gender, zipcode, and dateTravel inputs
document.getElementById('submit').onclick = function () {
    let genderInput = document.getElementById('gender-form').value
    var zipInput = document.getElementById("zipcode-input").value;
    let dateTravel = document.getElementById('days-form').value

    genderInputValue = genderInput;
    dateInputValue = dateTravel;

    console.log('Gender Input Integer: ' + genderInput)
    console.log('Zipcode Typed: ' + zipInput)
    console.log('Date Value Chosen: ' + dateTravel)

    document.getElementById('zipcode-input').value = ''
    getWeather(zipInput, getGenderAndClothes);
}

function getGenderAndClothes() {
    console.log("Temperature in submit", temperature);

    genderType()
    console.log('Return value of genderTyper() ' + genderChosen)
    clothesType(temperature)
    console.log('Return value of clothesType() ' + clothesChosen)
}

//************************************** Nick's Open Weather API******************************** */

//Call API and search for requested giphy
function getWeather(zipcode, callback) {
    console.log("Open Weather API Search Enabled! Yeet!")
    console.log("getWeather Function Input: " + zipcode)
    
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + "&units=imperial&appid=37857072468d87a5127698015d17b9e0"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
        displayWeather(response);
        callback();
        console.log("Temperature after Ajax call: ", temperature)
    });
}

let clothesfromTemp = function () {
    if (temperature >= 75) {
        console.log('Is is 70 degrees or more')
    } else if (temperature < 75 && temperature >= 55) {
        console.log('It is between 50 and 70 degrees')
    } else if (temperature < 55) {
        console.log('Is it below 50 degrees')
    }
}

let accessoriesfromPrecip = function () {
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

//Display weather information
function displayWeather(response) {

    console.log("Nick's Date Input Value " + dateInputValue)

    console.log("Display Weather Function Enabled")
    console.log("This is the response (below)")
    console.log(response)

    document.getElementById("weather-chart").empty;

    //Apending weather information to the HTML
    //If Day 1 is selected...
    if (dateInputValue == 1) {
        var dayOne = response.list[5]
        console.log("Day 1 Temp: " + dayOne.main.temp)
        console.log("Day 1 Description: " + dayOne.weather[0].description)
        console.log("Day 1 Cond. ID: " + dayOne.weather[0].id)

        addWeatherView(dayOne)
    }
    //If Day 2 is selected...
    else if (dateInputValue == 2) {
        var dayTwo = response.list[13]
        addWeatherView(dayTwo)
    }
    //If Day 3 is selected...
    else if (dateInputValue == 3) {
        var dayThree = response.list[21]
        addWeatherView(dayThree)
    }
    //if Day 4 is selected...
    else if (dateInputValue == 4) {
        var dayFour = response.list[29]
        addWeatherView(dayFour)

    }
    //if Day 5 is selected...
    else if (dateInputValue == 5) {
        var dayFive = response.list[37]
        addWeatherView(dayFive)
    }
    console.log('After addWeatherView():' + temperature)
    return temperature
};


let addWeatherView = function (day) {
    //create new table row
    var newRow = document.createElement("tr");
    //create new data cells in row
    var newDataDate = document.createElement("td");
    var newDataTemp = document.createElement("td");
    var newDataCond = document.createElement("td");

    //Get the date of the forecast
    var utc = day.dt;
    var newDate = Date(utc);
    var d = moment(newDate).format("MM-DD-YYYY");

    //create variables to append to data cells
    var forecastDate = document.createTextNode(d);
    var temp = document.createTextNode(day.main.temp);
    var cond = document.createTextNode(day.weather[0].description);
    //append variables to data cells
    newDataDate.appendChild(forecastDate);
    newDataTemp.appendChild(temp);
    newDataCond.appendChild(cond);
    //append data cells to row
    newRow.appendChild(forecastDate);
    newRow.appendChild(newDataTemp);
    newRow.appendChild(newDataCond);
    //append newRow to HTML
    let weatherDisplay = document.getElementById('weather-chart')
    weatherDisplay.appendChild(newRow);

    //Get weather ID to change global variable
    var iD = day.weather[0].id;
    console.log("Weather ID for Sean: " + iD);

    weatherID = iD;
    temperature = temp;
    weatherConditions = cond;
}

// logic to state in the search term the type of weather

var clothesType = function (temperature) {

    // console.log(temperature)


    if (temperature >= 75) {
        clothesChosen = "warm+weather"
        console.log(clothesChosen)
        return clothesChosen
    } else if (temperature < 75 && temperature >= 55) {
        clothesChosen = "mild+weather"
        console.log(clothesChosen)
        return clothesChosen
    } else if (temperature < 55) {
        clothesChosen = "cold+weather"
        console.log(clothesChosen)
        return clothesChosen

    }
    return clothesChosen
}

var genderType = function () {
    if (genderInputValue == 1) {
        genderChosen = "for+women"
        console.log('If women are chosen: ' + genderChosen)
    } else {
        genderChosen = "for+men"
        console.log('If men are chosen: ' + genderChosen)
    }
    return genderChosen
}

// we are using cold weather, mild weather, and hot weather ranges
function getSearchResults() {
    //    var queryURL = "https://www.googleapis.com/customsearch/v1?q=" + clothesChosen + "+" + genderChosen + "&cx=013791775854691782139%3A83btdvy04wk&exactTerms=clothing&fileType=jpg&gl=United+States&imgSize=medium&imgType=photo&searchType=image&key=AIzaSyAaYcg84hynl1DkmKZ7cjIo2u_-6D3udKg"
    var queryURL = "https://www.googleapis.com/customsearch/v1?q=warm+weather+clothes" + genderChosen + "&cx=013791775854691782139%3A83btdvy04wk&exactTerms=clothing&fileType=jpg&gl=United+States&imgSize=medium&imgType=photo&searchType=image&key=AIzaSyAaYcg84hynl1DkmKZ7cjIo2u_-6D3udKg"

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response)
            // pull back 4 images for each days forecast
            //I know this is not the way to write this, just jotting down to correct tomorrow:
            $("#clothing").html("<img scr>", this.items[0].image.link);
            //let clothesDisplay = document.getElementById('clothing')
            //clothesDisplay.appendChild();
            // make the images clickable and link to the link back in the JSON
        })
};
