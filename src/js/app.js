const track = document.querySelector('.ambience__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.ambience__button--right');
const prevButton = document.querySelector('.ambience__button--left');

const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide'),
        nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  hideUnhideSlides(currentSlide, nextSlide);
  removeAddArrow(slides,prevButton, nextButton, nextIndex);

})

prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide'),
        prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  hideUnhideSlides(currentSlide, prevSlide);
  removeAddArrow(slides,prevButton, nextButton, prevIndex);
})

function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left +')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

function removeAddArrow(slides, prevButton, nextButton, targetIndex) {
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

function hideUnhideSlides(currentSlide, targetSlide) {
  currentSlide.classList.add('is-hidden');
  targetSlide.classList.remove('is-hidden');
}