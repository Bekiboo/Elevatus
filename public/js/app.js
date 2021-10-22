// SELECTORS
const hamburgerButton = document.getElementById('hamburger')

// EVENT LISTENERS
hamburgerButton.addEventListener('click', toggleMenu)

// Hamburger button animation
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open')
  document.getElementById('js-nav').classList.toggle('display-nav')
}


// NavBar Intersection Observer
const header = document.querySelector('header')
const hero = document.querySelector('.hero')
const heroOptions = {}

const changeNavOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting) {
      header.classList.add('header--scrolled')
    } else {
      header.classList.remove('header--scrolled')
    }
  })
}

const heroObserver = new IntersectionObserver(changeNavOnScroll, heroOptions)
heroObserver.observe(hero)