function changeColor() {
  var blueDiv = document.getElementById("changeable");

  blueDiv.setAttribute("class","green half")
  
  

}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "",
      "x-rapidapi-host": "",
    },
  })
    .then((response) => {
      console.log(response);
      response.json().then(() => {git 
        /* 
          Complete this handler function with code that populates an html 
          element with the random word 
        */


      });
    })
    .catch((err) => {
      console.error(err);
    });
}
