let currentIndex = 0;
const slideInterval = 3000; 
let autoSlide;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  if (index >= totalSlides) currentIndex = 0;
  if (index < 0) currentIndex = totalSlides - 1;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === currentIndex) {
      slide.classList.add('active');
    }
  });

  document.querySelector('.carousel_contenu').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, slideInterval);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

startAutoSlide();

document.querySelector('.carousel-item').addEventListener('click', stopAutoSlide);
