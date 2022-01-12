function changeColor() {
  var blueDiv = document.getElementById("changeable");
  blueDiv.setAttribute('class', 'purple half');
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': config["x-rapidapi-host"],
      'x-rapidapi-key': config["x-rapidapi-key"]
    },
  })
    .then((response) => {
      response.json().then((responseBody) => {
        wordable.textContent = responseBody.word;
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
