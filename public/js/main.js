// Mobile Navbar
const mobileNavBtn = document.getElementById("mobile-nav-btn")
const mobileNav = document.getElementById("mobile-nav")
const mobileNavList = document.getElementById("mobile-nav-ul")
const mobileQuickActions = document.getElementById("mobile-quick-actions")

mobileNavBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("translate-x-0")
})

Array.from(mobileNavList.children).forEach(li => {
  li.firstChild.addEventListener("click", () => {
    mobileNav.classList.toggle("translate-x-0")
  })
})

Array.from(mobileQuickActions.children).forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.classList.toggle("translate-x-0")
  })
})

// Header Border Fill On Scroll
const headerBorder = document.getElementById('header-border')

controlHeaderBorder()

window.addEventListener("scroll", () => {
  controlHeaderBorder()
})

function controlHeaderBorder() {
  if (window.scrollY >= 20) {
    headerBorder.style.opacity = '1'
  } else {
    headerBorder.style.opacity = '0'
  }
  let percentage = (((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100)
  headerBorder.style.width = `${percentage}%`
}

// Initialize WOW.js
new WOW().init()

// Check Mode

if (window.localStorage.getItem("darkMode")) {
  document.getElementsByTagName('html')[0].classList.add("dark")
} else {
  document.getElementsByTagName('html')[0].classList.remove("dark")
}

// Dark Mode Toggle
const modeBtn = document.getElementById('mode')
const mobileModeBtn = document.getElementById("mobile-mode")

modeBtn.addEventListener("click", () => {
  handleMode()
})

mobileModeBtn.addEventListener("click", () => {
  handleMode()
})

function handleMode() {
  document.getElementsByTagName('html')[0].classList.toggle("dark")
  if (document.getElementsByTagName('html')[0].classList.contains("dark")) {
    window.localStorage.setItem("darkMode", true)
  } else {
    window.localStorage.removeItem("darkMode")
  }
}