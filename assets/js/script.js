var colorTwo = "#0e305d";

document.getElementById("presentationTwo").style.backgroundColor = hexToRGB(colorTwo, 0.5);
document.getElementById("infosTwo").style.backgroundColor = hexToRGB(colorTwo, 0.5);
document.getElementById("section-4-Two").style.backgroundColor = hexToRGB(colorTwo, 0.5);
document.getElementById("section-5-two").style.backgroundColor = hexToRGB(colorTwo, 0.5);


function detectWidth(width) {
  if (width >= 992) { // If media query matches
    document.getElementById('headerId').classList.remove("navbar-light");
    document.getElementById('headerId').classList.add("navbar-dark");

    document.getElementsByTagName('header')[0].classList.remove("bg-light");
    document.getElementsByTagName('header')[0].classList.add("bg-transparent");

    document.getElementById('navbar-nav-id').classList.remove("bg-white");
    document.getElementById('navbar-nav-id').classList.remove("mt-3");

    document.getElementById('navbar-nav-id').classList.add("bg-transparent");
    document.getElementById('navbar-nav-id').classList.add("mt-0");

  } else {
    document.getElementById('headerId').classList.remove("navbar-dark");
    document.getElementById('headerId').classList.add("navbar-light");

    document.getElementsByTagName('header')[0].classList.remove("bg-transparent");
    document.getElementsByTagName('header')[0].classList.add("bg-light");

    document.getElementById('navbar-nav-id').classList.remove("bg-transparent");
    document.getElementById('navbar-nav-id').classList.remove("mt-0");

    document.getElementById('navbar-nav-id').classList.add("bg-white");
    document.getElementById('navbar-nav-id').classList.add("mt-3");
  }
}

var newWidth = window.innerWidth;
detectWidth(newWidth);// Call function at run time

window.addEventListener('resize', function(event){
    detectWidth(window.innerWidth);
});


// carousel

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// function to hide the navbar-collapse header

function hideCollapseNavbar(hideNavbar) {

  var collapseNavbar = document.getElementById("navbarSupportedContent")

  hideNavbar.addEventListener('click', function (event) {
    document.getElementById("buttonNavbarToggler").ariaExpanded = "false";
    collapseNavbar.classList.remove("show");    
  })

}

var hideNavbar = document.getElementsByClassName('nav-link');

for (var i = hideNavbar.length - 1; i >= 0; i--) {
hideCollapseNavbar(hideNavbar[i]);
}

// Detect click outside of navbar-collabse and hide it
window.addEventListener('click', function(e){ 

  var collapsingNavbar = document.getElementById('navbarSupportedContent');

  if (collapsingNavbar.contains(e.target)){
    // Clicked in box (navbar-toggler)
  } else{
    
    // collapsingNavbar.classList.remove("show");

  }
  
});

var svg = document.getElementsByClassName("svg-testimonials");
for (var i = svg.length - 1; i >= 0; i--) {
  svg[i].setAttribute("fill", "var(--four)");
}

// var buttonCardServices = document.getElementById('collapseButton');
// buttonCardServices.addEventListener('click', function(event){
//   document.getElementById('collapseExampleOverlay').classList.add("bg-color-two");
// })

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

// hexToRGB('#FF0000', 0.5);

// Services element

function collapseServices(myCollapsible, collapseServicesOverlay) {

  myCollapsible.addEventListener('show.bs.collapse', function () {
    collapseServicesOverlay.style.backgroundColor = hexToRGB(colorTwo, 0.5);
  })

  myCollapsible.addEventListener('hidden.bs.collapse', function () {
    collapseServicesOverlay.style.backgroundColor = '';

  })

}
var collapseServicesOverlay1 = document.getElementById('collapseServicesOverlay1');
var collapseServices1 = document.getElementById('collapseServices1');
collapseServices(collapseServices1, collapseServicesOverlay1);

var collapseServicesOverlay2 = document.getElementById('collapseServicesOverlay2');
var collapseServices2 = document.getElementById('collapseServices2');
collapseServices(collapseServices2, collapseServicesOverlay2);

var collapseServicesOverlay3 = document.getElementById('collapseServicesOverlay3');
var collapseServices3 = document.getElementById('collapseServices3');
collapseServices(collapseServices3, collapseServicesOverlay3);



function cardHoverForLargeScreen(cardHover, collapseServices, collapseServicesOverlay) {

  cardHover.addEventListener('mouseover', function () {
    collapseServices.classList.add("show")
    collapseServicesOverlay.style.backgroundColor = hexToRGB(colorTwo, 0.5);

  })

  cardHover.addEventListener('mouseleave', function () {
    collapseServices.classList.remove("show")
    collapseServicesOverlay.style.backgroundColor = "";

  })

}

var cardHover1 = document.getElementById('cardHover1');
var cardHover2 = document.getElementById('cardHover2');
var cardHover3 = document.getElementById('cardHover3');

document.addEventListener("DOMContentLoaded", function(){
// make it clickable for smaller screens

if (window.innerWidth > 992) {

cardHoverForLargeScreen(cardHover1, collapseServices1, collapseServicesOverlay1);
cardHoverForLargeScreen(cardHover2, collapseServices2, collapseServicesOverlay2);
cardHoverForLargeScreen(cardHover3, collapseServices3, collapseServicesOverlay3);

}// end if innerWidth

}); 
// DOMContentLoaded  end

window.addEventListener('resize', function(event){
    if (window.innerWidth > 992) {

    cardHoverForLargeScreen(cardHover1, collapseServices1, collapseServicesOverlay1);
    cardHoverForLargeScreen(cardHover2, collapseServices2, collapseServicesOverlay2);
    cardHoverForLargeScreen(cardHover3, collapseServices3, collapseServicesOverlay3);

    }
});


AOS.init();
