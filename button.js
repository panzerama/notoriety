function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  /* Your Code Goes Here */
  blueDiv.classList.remove("blue");
  blueDiv.classList.add("greenyellow");
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "5f42c395edmsh3121e5f94aab011p1c7eabjsnc711d1eb3d13",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  })
    .then((response) => {
      console.log(response);
      response.json().then(() => {
        /* 
          Complete this handler function with code that populates an html 
          element with the random word 
        */
       wordable.innerHTML = response.text();
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
