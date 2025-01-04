document.addEventListener('scroll', () => {
    const element = document.querySelector('.nav-items-dynamic');
    const triggerPoint = 90; // Change this to your desired scroll point in pixels
    
    if (window.scrollY > triggerPoint) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });

// BACK TO TOP BUTTON
window.addEventListener('scroll', function () {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 300) { // Adjust based on when you want the button to appear
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

// Scroll back to the top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
  });
});


// Carousel -----------------------------------------
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
        slidesPerView: 1, // Ensure only one slide is visible
        spaceBetween: 0,
  
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
      loop: true, // Enable looping
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      autoplay: {
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // Keeps autoplay active after user interaction
      },
  });
});