function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  /* Your Code Goes Here */

  document.getElementById("changeable").style.backgroundColor = "yellowGreen"

  
}

function replaceWord() {
  var ran = Math.floor(Math.random( )*100);
  var wordable = document.getElementById('wordable');
  var word = "";
  //var blueDiv = document.getElementById("changeable");
  fetch('https://jsonplaceholder.typicode.com/posts/'+ran)
      .then(data => {return data.json();})
      .then(word => {word =>word.title;console.log(word.title);
      wordable.textContent = word.title;
    
  
  })
  .catch((err) => {
    console.error(err);
  });
}