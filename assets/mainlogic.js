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
const fetchBtn = document.getElementById("fetch");

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