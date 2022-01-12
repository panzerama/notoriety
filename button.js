function changeColor() {
  // Get the element to be changed
  var blueDiv = document.getElementById("changeable");

  // Onclick, change the color of the element
      blueDiv.setAttribute("class", "yellow half");
}
let key;
function replaceWord() {
  // Get the element to be changed
  var wordable = document.getElementById('wordable');

  // Get the key to be used from the text file
  fetch('key.txt')
  .then(response => response.text())
  .then(text => {
    key = text;
  })
  .catch(error => console.log('error', error));
  

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
