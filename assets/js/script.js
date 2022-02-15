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
    console.log(window.innerWidth);
});