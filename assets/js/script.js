function detectWidth(x) {
  if (width.matches) { // If media query matches
    document.getElementById('header').classList.add("navbar-dark")
    document.getElementsByTagName('header')[0].classList.add("bg-transparent")
    document.getElementById('navbar-nav-id').classList.add("bg-transparent")
    document.getElementById('navbar-nav-id').classList.add("mt-0")
  } else {
    document.getElementById('header').classList.add("navbar-light")
    document.getElementsByTagName('header')[0].classList.add("bg-light")
    document.getElementById('navbar-nav-id').classList.add("bg-white")
    document.getElementById('navbar-nav-id').classList.add("mt-3")

  }
}

var width = window.matchMedia("(min-width: 992px)")
detectWidth(width) // Call listener function at run time
width.addListener(detectWidth) // Attach listener function on state changes
console.log(width)
