// Google Search API Key AIzaSyAaYcg84hynl1DkmKZ7cjIo2u_-6D3udKg

// Initialize Firebase

var config = {
    apiKey: "AIzaSyCUa3OmzBQAV9MHxQg6Pgl2s5533V5qjEI",
    authDomain: "coder-bay-fee9d.firebaseapp.com",
    databaseURL: "https://coder-bay-fee9d.firebaseio.com",
    storageBucket: "coder-bay-fee9d.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  // Create a variable to reference the database
  var database = firebase.database();

  //searchTerm will use the data sent back from the weather api and search for that locations fashion 
  // we are using cold weather, mild weather, and hot weather ranges
  var searchTerm = clothesType + genderType; //needs to take data from nick and covert to a search query
  var queryURL = "https://www.googleapis.com/customsearch/v1?q=" + searchterm + "&cx=013791775854691782139%3A83btdvy04wk&exactTerms=clothing&fileType=jpg&gl=United+States&imgSize=medium&imgType=photo&searchType=image&key=AIzaSyAaYcg84hynl1DkmKZ7cjIo2u_-6D3udKg";
  let clothingView = document.getElementById('clothing')

  // logic to state in the search term the type of weather
  
  let clothesType = function () {
    if (temperature >= 75) {
        clothesType = "warm+weather"
    } else if (temperature < 75 && temperature >= 55) {
      clothesType = "mild+weather"
    } else if (temperature < 55) {
      clothesType = "cold+weather"
    }
}

let genderType = function () {
  if (genderInputValue = 1) {
      clothesType = "for+women"
  } else {
    clothesType = "for+men"
  }
}

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response)})

        // pull back 4 images for each days forecast
        // make the images clickable and link to the link back in the JSON

        
    