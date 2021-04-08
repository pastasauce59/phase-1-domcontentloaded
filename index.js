document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const changeText = document.getElementById('text').textContent = "This is really cool!";
  });

  
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  ); 









//const changeText = document.getElementById('text').textContent = "This is really cool!";
  
  //changeText.innerText = "This is really cool!"

//changeText.addEventListener("DOMContentLoaded", function(){
//      changeText.innerText = "This is really cool!";
//      console.log("changed text");
//  });