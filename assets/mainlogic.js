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

// checkbox varable
let check = document.getElementsByTagName("Input");

// fetch for input


let selection = [
    checkboxPlatformWindows,
    checkboxPlatformBrowser,
    checkboxGenreShooter,
    checkboxGenreArpg,
    checkboxGenreStrategy,
    checkboxGenreMmorpg,
    checkboxGenreMmo,
    checkboxGenreMoba
]

// for (let i = 0; i < check.length; i++) {
//     if (check[i].checked) {
//         search.push(check[i].value);
//     }
// }

// fetch button with functions
const fetchBtn = document.getElementById("fetch").addEventListener("click", function fetching(){
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            selection.push(check[i].value);
            console.log(i);
        }
        if (selection.length > 0) {
            console.log("You choose: " + selection.join(","));
        }
    }
});

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

// https://www.javatpoint.com/how-to-get-all-checked-checkbox-value-in-javascript


// unused code 
// for (let i = 0; i < searchGenre.length; i++) {
//     console.log(searchPlatform[i], searchGenre[i]);
// }

// https://www.aspsnippets.com/Articles/Get-multiple-selected-checked-CheckBox-values-in-Array-using-JavaScript.aspx