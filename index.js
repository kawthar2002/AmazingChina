const items = document.querySelectorAll('.counter-item__title');
const counterBox = document.querySelector('.counter');
const counterText = document.querySelector('.title--small');

let countdown = new Date(2023, 6, 1, 11, 00, 0).getTime();

function getCountdownTime() {
  const now = new Date().getTime();
  const timeDistance = countdown - now;

  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const min = 60 * 1000;

  let daysLeft = Math.floor(timeDistance / day);
  let hoursLeft = Math.floor((timeDistance % day) / hour);
  let minutesLeft = Math.floor((timeDistance % hour) / min);
  let secondsLeft = Math.floor((timeDistance % hour) / 1000);

  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];
  items.forEach((item, index) => {
    item.textContent = values[index];
  });

  if (timeDistance < 0) {
    clearInterval(counter);
    counterBox.style.display = 'none';
    counterText.innerHTML = 'Go!';
    counterText.style.fontSize = '48px';
  }
}

let counter = setInterval(getCountdownTime, 1000);
getCountdownTime();

const slider = document.getElementById('slider');
const slides = Array.from(slider.children);
const btnPrev = document.querySelector('.buttons__prev');
const btnNext = document.querySelector('.buttons__next');

slides.forEach((slide, index) => {
  if (index !== 0) {
    slide.classList.add('hidden');
  }

  slide.dataset.index = index;
  slides[0].setAttribute('data-active', '');

  slide.addEventListener('click', function () {
    showNextSlide('next');
  });
});

btnPrev.addEventListener('click', () => {
  showNextSlide('prev');
});

btnNext.addEventListener('click', () => {
  showNextSlide('next');
});

function showNextSlide(direction) {
  const currentSlide = slider.querySelector('[data-active');
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');

  let nextSlideIndex;

  if (direction === 'next') {
    nextSlideIndex =
      currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
  } else if (direction === 'prev') {
    nextSlideIndex =
      currentSlideIndex + 1 === slides.length ? 0 : currentSlideIndex + 1;
  }
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
}
