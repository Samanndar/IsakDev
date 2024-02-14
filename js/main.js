function init () {
  // BURGER
  const isIcon = document.querySelector(".header__icon");
  const isNav = document.querySelector(".header__nav");

  if(isIcon) {
    isIcon.addEventListener("click", function() {
      isIcon.classList.toggle("active")
      isNav.classList.toggle("active")
      document.body.classList.toggle("lock")
    })
  }
  
  // ACTIVE-MENU
  const actItem = document.querySelectorAll(".nav__link");
  actItem.forEach(item => {
    item.addEventListener("click", function(e) {
      actItem.forEach(act => {act.classList.remove("nav__link--active")})
      item.classList.toggle("nav__link--active")
      if(isNav.classList.contains("active")) {
        isIcon.classList.remove("active")
        isNav.classList.remove("active")
        document.body.classList.remove("lock")
      }
    })
  })
}

document.addEventListener('DOMContentLoaded', init);
