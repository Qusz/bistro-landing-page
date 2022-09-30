

//* Slider
class Slider {
  moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }

  removeAddArrow(slides, prevButton, nextButton, targetIndex) {
    if (targetIndex === 0) {
      prevButton.classList.add('is-hidden');
      nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
      nextButton.classList.add('is-hidden');
      prevButton.classList.remove('is-hidden');
    } else {
      nextButton.classList.remove('is-hidden');
      prevButton.classList.remove('is-hidden');
    }
  }
  
  hideUnhideSlides(currentSlide, targetSlide) {
    currentSlide.classList.add('is-hidden');
    targetSlide.classList.remove('is-hidden');
  }
}


//* Main

loadSlider();
loadHamburger();



//* Functions

function loadSlider() {
  const track = document.querySelector('.ambience__track'),
        slides = Array.from(track.children),
        nextButton = document.querySelector('.ambience__button--right'),
        prevButton = document.querySelector('.ambience__button--left'),
        slideWidth = slides[0].getBoundingClientRect().width,
        slider = new Slider();

  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  });

  nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide'),
          nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    slider.moveToSlide(track, currentSlide, nextSlide);
    slider.hideUnhideSlides(currentSlide, nextSlide);
    slider.removeAddArrow(slides,prevButton, nextButton, nextIndex);

  })

  prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide'),
          prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    slider.moveToSlide(track, currentSlide, prevSlide);
    slider.hideUnhideSlides(currentSlide, prevSlide);
    slider.removeAddArrow(slides,prevButton, nextButton, prevIndex);
  })
}

function loadHamburger() {
  const hamburger = document.querySelector('.navbar__hamburger'),
        navbarItems = document.querySelector('.navbar__items');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navbarItems.classList.toggle('is-active');
  })
  
}


