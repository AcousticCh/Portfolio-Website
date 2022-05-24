var navIcon = document.getElementById("icon");
var x = document.getElementById("navbar-container");

function openNavbar() {
    
    if (x.className === "navbar") {
      x.className += " responsive";
      navIcon.style.visibility = "hidden";
    } else {
      x.className = "navbar";
      navIcon.style.visibility = "visible"
    }
  } 

 // build event listener to control hidden icon