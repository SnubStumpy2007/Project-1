// if html is similiar to below
// <input type="checkbox" id="apiKeyCheckbox">
//<label for="apiKeyCheckbox">Use API Key</label>

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

// Add event listener to listen for changes in checkbox state
checkbox.addEventListener("change", function() {
  // Get the API key value element
  const apiKeyValue = document.getElementById("apiKeyValue");

  if (this.checked) {
    // Set the API key value to the desired key when the checkbox is checked
    apiKeyValue.value = "YOUR_API_KEY";
  } else {
    // Set the API key value to an empty string when the checkbox is unchecked
    apiKeyValue.value = "";
  }
});
