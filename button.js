function changeColor() {
  var blueDiv = document.getElementById("changeable");
  blueDiv.setAttribute('class', 'purple half')
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "62ee04532cmsh7f31d7cd8adedf1p1e52cajsn58c49564488b'",
    
    },
  })
    .then((response) => {
      response.json().then((responseBody) => {
        console.log(responseBody.word);
        wordable.textContent = responseBody.word
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
