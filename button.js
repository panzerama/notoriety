function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  blueDiv.setAttribute('class', 'green half')
}

async function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "827a06f261mshe8645cfdf526a17p107375jsncf83cf745b10",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  })
    .then((response) => {
      response.json().then((responseBody) => {
        console.log(responseBody.word);
        wordable.textContent = responseBody.word
      });
    })
    .catch ((err) => {
      console.error(err);
    });
}
