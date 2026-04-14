console.log("JS file connected");

// variables
const container = document.querySelector('.product-container');
const items = document.querySelectorAll('.product-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.product-slider');

const productButtons = document.querySelectorAll('.product-btn');

let index = 0;


// function
function moveSlider() {
  let slideWidth = slider.offsetWidth;
  let moveValue = index * slideWidth;
  container.style.transform = "translateX(-" + moveValue + "px)";
}

function showNextSlide() {
  if (window.innerWidth >= 768) {
    return;
  }

  if (index < items.length - 1) {
    index = index + 1;
  } else {
    index = 0;
  }

  moveSlider();
}

function showPrevSlide() {
  if (window.innerWidth >= 768) {
    return;
  }

  if (index > 0) {
    index = index - 1;
  } else {
    index = items.length - 1;
  }

  moveSlider();
}

function resetSlider() {
  if (window.innerWidth >= 768) {
    container.style.transform = "translateX(0px)";
    index = 0;
  } else {
  
    moveSlider();
  }
}

function handleCartClick(event) {
  event.preventDefault();

  const goToCart = confirm('Go to your cart?');

  if (goToCart) {
    alert('Cart page is not ready yet.');
  }
}

// event listener
prev.addEventListener('click', showPrevSlide);
next.addEventListener('click', showNextSlide);
window.addEventListener('resize', resetSlider);

productButtons.forEach(function (button) {
  button.addEventListener('click', handleCartClick);
});