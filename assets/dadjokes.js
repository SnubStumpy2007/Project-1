var requestUrl = '//icanhazdadjoke.com/';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
  });
}

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });



getApi(requestUrl);

// I got it to console.log a lot of data but no joke
