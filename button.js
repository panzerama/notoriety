let key;
function getKey() {
  fetch('key.txt')
  .then(response => response.text())
  .then(text => {
    key = text;
  }).catch(error => console.log('error', error));
}

function changeColor() {
  var blueDiv = document.getElementById("changeable");
      blueDiv.setAttribute("class", "yellow half");
}

function replaceWord() {
  var wordable = document.getElementById('wordable');
  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
    })
    .then((response) => {
      response.json().then((data) => {
        wordable.innerHTML = data.word;
      })
    .catch((err) => {
      console.error(err);
    });
  });
}
