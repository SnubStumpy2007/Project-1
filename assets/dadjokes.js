const getDadJoke = async function()  {
  const dadJokeResponse = await fetch("https://icanhazdadjoke.com/", {
      headers: {
          Accept: "application/json"
      }
  });
  const dadJokeJSON = await dadJokeResponse.json();
  if (dadJokeJSON.status === 200) {
      return dadJokeJSON.joke;
  } else {
      return "Unfortunately I cannot return a Dad joke at this time!"
  }
};

(async () => console.log(await getDadJoke()))();


