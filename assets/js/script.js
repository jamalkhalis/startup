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
    collapseNavbar.classList.remove("show");
    collapseNavbar.classList.add("hide");
  })

}

var hideNavbar = document.getElementsByClassName('nav-link');

hideCollapseNavbar(hideNavbar[0]);
hideCollapseNavbar(hideNavbar[1]);
hideCollapseNavbar(hideNavbar[2]);
hideCollapseNavbar(hideNavbar[3]);
hideCollapseNavbar(hideNavbar[4]);
hideCollapseNavbar(hideNavbar[5]);