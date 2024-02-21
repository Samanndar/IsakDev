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
  // MODAL
  const modalClick = document.querySelector(".modal__click");
  const modalContent = document.querySelector(".modal__content");
  const modalClose = document.querySelector(".modal__close");

  modalClick.addEventListener("click", function() {
    modalContent.classList.toggle("modal__show")
    setTimeout(() => {
      document.body.classList.toggle("modal__body")
    }, 1000)
  })
  modalClose.addEventListener("click", function() {
    modalContent.classList.toggle("modal__show")
    document.body.classList.toggle("modal__body")
  })
  document.addEventListener("keydown", (e) => {
    if(e.code == "Escape" && modalContent.classList.contains("modal__show")) {
      document.body.classList.toggle("modal__body")
      modalContent.classList.toggle("modal__show")
    }
  })
  // SLIDER
  const slide = document.querySelectorAll(".carousel__slide")
  const point = document.querySelectorAll(".carousel__point")
  const rightCarousel = document.querySelector(".carousel__right")
  const leftCarousel = document.querySelector(".carousel__left")
  let offset = 0;

  point[0].classList.add("carousel__point--white")
  slide[0].classList.add("carousel__slide--block")

  for(let i = 0; i < point.length; i++) {
    point[i].addEventListener("click", function() {
      for(let k = 0; k< slide.length; k++) {
        point[k].classList.remove("carousel__point--white")
        slide[k].classList.remove("carousel__slide--block")
      }
      offset = i;
      point[offset].classList.add("carousel__point--white")
      slide[offset].classList.add("carousel__slide--block")
    })
  }

  rightCarousel.addEventListener("click", function() {
    for(let i = 0; i < slide.length; i++) {
      slide[i].classList.remove("carousel__slide--block");
      point[i].classList.remove("carousel__point--white");
    }
    offset++
    if(offset == slide.length) {
      offset = 0;
    }
    point[offset].classList.add("carousel__point--white");
    slide[offset].classList.add("carousel__slide--block");
  })
  leftCarousel.addEventListener("click", function() {
    for(let i = 0; i < slide.length; i++) {
      slide[i].classList.remove("carousel__slide--block");
      point[i].classList.remove("carousel__point--white");
    }
    offset--
    if(offset < 0) {
      offset = slide.length - 1;
    }
    point[offset].classList.add("carousel__point--white");
    slide[offset].classList.add("carousel__slide--block");
  })

  // Slider-skills
  const skillSlide = document.querySelectorAll(".skills__slide")
  const skillPoint = document.querySelectorAll(".skills__point")
  const skillRightCarousel = document.querySelector(".skills-carousel__right")
  const skillLeftCarousel = document.querySelector(".skills-carousel__left")
  let skills = 0;

  skillPoint[0].classList.add("skills-block")
  skillSlide[0].classList.add("skills-block")

  for(let i = 0; i < skillPoint.length; i++) {
    skillPoint[i].addEventListener("click", function() {
      for(let k = 0; k< skillSlide.length; k++) {
       skillPoint[k].classList.remove("skills-block")
        skillSlide[k].classList.remove("skills-block")
      }
      offset = i;
      skillPoint[skills].classList.add("skills-block")
      skillSlide[skills].classList.add("skills-block")
    })
  }

  skillRightCarousel.addEventListener("click", function() {
    for(let i = 0; i < skillSlide.length; i++) {
      skillSlide[i].classList.remove("skills-block");
      skillPoint[i].classList.remove("skills-block");
    }
    skills++
    if(skills == skillSlide.length) {
      skills = 0;
    }
    skillPoint[skills].classList.add("skills-block");
    skillSlide[skills].classList.add("skills-block");
  })
  skillLeftCarousel.addEventListener("click", function() {
    for(let i = 0; i < skillSlide.length; i++) {
      skillSlide[i].classList.remove("skills-block");
      skillPoint[i].classList.remove("skills-block");
    }
    skills--
    if(skills < 0) {
      skills = skillSlide.length - 1;
    }
    skillPoint[skills].classList.add("skills-block");
    skillSlide[skills].classList.add("skills-block");
  })
}

document.addEventListener('DOMContentLoaded', init);
