var introName = document.getElementById("intro-name");
var navbarContainer = document.getElementById("navbar-container");

var MediaQueryTest = window.matchMedia("(max-width: 500px)") // Media size that removes last name from header

function openNavbar() {
    
    if (navbarContainer.className === "navbar") {
      navbarContainer.className += " responsive";
      
    } else {
      navbarContainer.className = "navbar";
      
    }
  } 

  // Changes header depending on media query
  function headerMediaQuery(x) {
    if (x.matches) { // If media query matches
      introName.textContent = "Robert H";
    } else {
      introName.textContent = "Robert Hassenmayer";
    }
  }
  
  
  headerMediaQuery(MediaQueryTest) // Call listener function at run time
  MediaQueryTest.addListener(headerMediaQuery) // Attach listener function on state changes 
