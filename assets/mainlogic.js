// Get the checkbox elements for Platform criteria
const checkboxPlatformWindows = document.getElementById("platform-windows");
const checkboxPlatformBrowser = document.getElementById("platform-browser");
// Get the checkbox elements for Genre criteria
const checkboxGenreShooter = document.getElementById("genre-shooter");
const checkboxGenreArpg = document.getElementById("genre-arpg");
const checkboxGenreStrategy = document.getElementById("genre-strategy");
const checkboxGenreMmorpg = document.getElementById("genre-mmorpg");
const checkboxGenreMmo = document.getElementById("genre-mmo");
const checkboxGenreMoba = document.getElementById("genre-moba");
// fetch button
const fetchBtn = document.getElementById("fetch").addEventListener("click", function(){alert("Hi, I'm ELize Lutus!")});

// fetch for input

let searchPlatform = [
    checkboxPlatformWindows,
    checkboxPlatformBrowser
]

let searchGenre = [
    checkboxGenreShooter,
    checkboxGenreArpg,
    checkboxGenreStrategy,
    checkboxGenreMmorpg,
    checkboxGenreMmo,
    checkboxGenreMoba
]


//fetchBtn.addEventListener('click');

for (let i = 1; i <= searchPlatform.length; i++){
    console.log(i);
}

for (let j = 0; j <= searchGenre.length; j++){
    console.log(j);
}

// when fetch button is pressed, a function is called.  Fetch button has an event listener attached to it0
// function loops through both arrays, the stores selections into a variable
// once selections are stored in the variable, a fetch request is made to the API we are using for this project
// Results are displayed on the website