function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
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
      console.log(response);
      response.json().then((responseBody) => {
        console.log(responseBody.word);
        wordable.textContent = responseBody.word;
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
