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


  function displayMovieInfo() {

    var queryURL = "https://cse.google.com/cse?cx=013791775854691782139:83btdvy04wk" + movie + "&apikey=AIzaSyAaYcg84hynl1DkmKZ7cjIo2u_-6D3udKg";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
