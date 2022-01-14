function changeColor() {
  var blueDiv = document.getElementById("changeable");
  blueDiv.setAttribute("class","green half") 
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
      response.json().then((responseBody) => {
          wordable.textContent = responseBody.word
      });
    })
}
