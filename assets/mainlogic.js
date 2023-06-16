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
    
    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("API Response:", data);
        for (var i = 0; i < data.length; i++) {
        let results = document.getElementById("gameprintout").innerHTML = data[i];
        console.log(results);
        
       // results.textContent = data[i];
       // collections.append(results);
       // issueContainer.append(results);
        }
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
  var sportsRadioBtn = document.getElementById("sportsRadioBtn");
  var towerDefenseRadioBtn = document.getElementById("towerDefenseRadioBtn");
  var actionRadioBtn = document.getElementById("actionRadioBtn");

  //var collections = document.getElementById("gameprintout")
  
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
    } else if (sportsRadioBtn.checked) {
        genre = "sports";
    } else if (towerDefenseRadioBtn.checked) {
        genre = "tower-defense";
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