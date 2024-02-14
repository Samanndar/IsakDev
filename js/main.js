function init () {
  // BURGER
  const isIcon = document.querySelector(".header__icon");

  if(isIcon) {
    const isNav = document.querySelector(".header__nav")
    isIcon.addEventListener("click", function() {
      isIcon.classList.toggle("active")
      isNav.classList.toggle("active")
      document.body.classList.toggle("lock")
    })
  }
}

document.addEventListener('DOMContentLoaded', init);
