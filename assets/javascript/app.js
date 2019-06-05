//API Key:
//37857072468d87a5127698015d17b9e0


//When the submit button is clicked - get the zip code value and call Open Weather Search API
$("#submit-button").on("click", function() {
    event.preventDefault();

    console.log("Submit Button Clicked - Zip Code Obtained!")

    var zipInput = $('#zip-code-input').val().trim();
    
    //previousSearches.push(zipInput) - we can add a firebase and display recent searches!?!?!?
    
    getWeather(zipInput);
})

//Call API and search for requested giphy
function getWeather(zipInput) {
    console.log("Open Weather API Search Enabled! Yeet!")

    var zip = zipInput

    var queryURL = "api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us"
    //API Key:
    //37857072468d87a5127698015d17b9e0
    
    $.ajax({
        url: queryURL,
        method: "GET"
        })
    .done(function(response){
            displayWeather(response);
        })
}

//Display all the giphy's
function displayWeather(response) {
    console.log("Display Weather Function Enabled")
    console.log("This is the response" + response)

    $('#weather-table').empty();

    for (var i = 0; j < response.data.length; i++) {
//What am I appending to? 
//What information am I appending?
        //Forecast High Temp
        //Forecast Low Temp
        //Weather Conditions
    };
};