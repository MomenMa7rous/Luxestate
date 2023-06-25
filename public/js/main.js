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