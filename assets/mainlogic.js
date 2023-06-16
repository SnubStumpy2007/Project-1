// Function to call the API with open parameters based on radio button logic
function callAPI(platform, genre) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&category=${genre}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd518377908mshe401b1f8e3abd60p1e5d42jsncb53b176840a',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
 // options needed due to CORS error; found header on API site under CORS issues   
    fetch(url, options)
    .then(function(response) {
      return response.json();
    })
 // makes empty array, sets the number of objects allowed to 3
    .then(function(data) {
      var randomGames = [];
      var numberOfObjects = 3;
// loops through numberofobjects variable above and selects random index number from the "data" array created from api call
// math random generates number from 0-1, then floor rounds to nearest whole number
// puts the randomly generated games into new index/array     
    for (let i = 0; i < numberOfObjects; i++) {
        var randomIndex = Math.floor(Math.random() * data.length);
        randomGames.push(data[randomIndex]);
      }

      // Use the random objects
      console.log("Random Games", randomGames);

      // ... do something else with the random objects ...
    })
    .catch(function(error) {
      console.error("API Error:", error);
    }); 
    }
  
  // html radio button elements for platform selection
  var pcRadioBtn = document.getElementById("pcRadioBtn");
  var browserRadioBtn = document.getElementById("browserRadioBtn");
  
  // html radio button elements for genre selection
  var shooterRadioBtn = document.getElementById("shooterRadioBtn");
  var mmorpgRadioBtn = document.getElementById("mmorpgRadioBtn");
  var strategyRadioBtn = document.getElementById("strategyRadioBtn");
  var sideScrollerRadioBtn = document.getElementById("sideScrollerRadioBtn");
  var fantasyRadioBtn = document.getElementById("fantasyRadioBtn");
  var actionRadioBtn = document.getElementById("actionRadioBtn");
  
  // Function choose which radio button is selected
  function handleRadioButtonChange() {
  // Get the selected platform value
    var platform;
    if (pcRadioBtn.checked) {
      platform = "pc";
    } else if (browserRadioBtn.checked) {
      platform = "browser";
    }
  // Get the selected genre value to complete the category parameter
    var genre;
    if (shooterRadioBtn.checked) {
        genre = "shooter";
    } else if (mmorpgRadioBtn.checked) {
        genre = "mmorpg";
    } else if (strategyRadioBtn.checked) {
        genre = "strategy";
    } else if (sideScrollerRadioBtn.checked) {
        genre = "side-scroller";
    } else if (fantasyRadioBtn.checked) {
        genre = "fantasy";
    } else if (actionRadioBtn.checked) {
        genre = "action";
    }
    
// function that calls API function and adds in platform and genre parameters to url
    if (platform && genre) {
      callAPI(platform, genre);
    }
  }
  
  // Html submit button element
  var submitButton = document.getElementById("submitBtn");
  
  // Function to handle the submit button click event
  function handleButtonClick() {
  // Call the handleRadioButtonChange function when the submit button is clicked
    handleRadioButtonChange();
  }
  
  // "click" "event listener for the submit button
  submitButton.addEventListener("click", handleButtonClick);
  
  //renders api response to html
  function printGames() {
    const gameList = document.getElementById("gameprintout");
    printGames().then(function(data) {
      gameList.textContent = data;
    })}


    // loop to grab data values from 4 keys, three times max than go through all array
    // create dom element/modify - check out activity examples for serverside api - nick
