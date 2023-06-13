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

// fetch button with functions
const fetchBtn = document.getElementById("fetch").addEventListener("click", function fetching(){
    for (let i = 0; i < searchGenre.length; i++) {
        const result = searchGenre.concat(searchPlatform);
        console.log(result);
       // console.log(searchPlatform[i], searchGenre[i]);
    }
});


// for (let i = 1; i <= searchPlatform.length; i++){
//     console.log(i);
// }

// for (let j = 0; j <= searchGenre.length; j++){
//     console.log(j);
// }

// when fetch button is pressed, a function is called.  Fetch button has an event listener attached to 
// function loops through both arrays, the stores selections into a variable
// once selections are stored in the variable, a fetch request is made to the API we are using for this project
// Results are displayed on the website

// sources
// https://www.slingacademy.com/article/javascript-how-to-iterate-through-2-arrays-in-parallel/
// for (let i = 0; i < searchGenre.length; i++) {
//     console.log(searchPlatform[i], searchGenre[i]);
// }

// then this source to loop through two arrays of differning lengths


// unused code 
// for (let i = 0; i < searchGenre.length; i++) {
//     console.log(searchPlatform[i], searchGenre[i]);
// }