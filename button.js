function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  blueDiv.setAttribute('class', 'orange half');
}

async function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "295bc1e9b9msh5d9001a4dab9bacp1c707cjsn940bb4aab23b",
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
