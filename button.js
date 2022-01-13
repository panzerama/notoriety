function changeColor() {
  var blueDiv = document.getElementById("changeable");

  blueDiv.setAttribute("class","green half")
  
  

}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "91b4866cf8mshaf4078eba316917p132b33jsn2011191e658c",
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


      });
    })
    .catch((err) => {
      console.error(err);
    });
}
