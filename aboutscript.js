document.addEventListener('DOMContentLoaded', function() {
    // Close navbar when clicking on a link
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
          bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
      });
    });
    
    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
      const navbarCollapse = document.getElementById('navbarNav');
      const navbarToggler = document.querySelector('.navbar-toggler');
      
      // Check if navbar is open and click is outside navbar and not on the toggle button
      if (navbarCollapse.classList.contains('show') && 
          !navbarCollapse.contains(event.target) && 
          event.target !== navbarToggler && 
          !navbarToggler.contains(event.target)) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
      }
    });
  });


  //Slider
class TestimonialSlider {
    constructor() {
        this.track = document.querySelector('.slider-track');
        this.slides = document.querySelectorAll('.testimonial-card');
        this.prevButton = document.querySelector('.prev-button');
        this.nextButton = document.querySelector('.next-button');
        this.currentIndex = 0;
        
        this.init();
    }

    init() {
        this.updateSlider();
        this.bindEvents();
        this.enableTouchSupport();
    }

    isMobile() {
        return window.innerWidth < 768;
    }

    getSlidesPerView() {
        return this.isMobile() ? 1 : 3;
    }

    updateSlider() {
        const slideWidth = 100 / this.getSlidesPerView();
        const translateX = -(this.currentIndex * slideWidth);
        this.track.style.transform = `translateX(${translateX}%)`;
        
        this.updateButtonStates();
    }

    updateButtonStates() {
        const maxIndex = this.slides.length - this.getSlidesPerView();
        this.prevButton.disabled = this.currentIndex === 0;
        this.nextButton.disabled = this.currentIndex >= maxIndex;
    }

    bindEvents() {
        this.prevButton.addEventListener('click', () => this.slide('prev'));
        this.nextButton.addEventListener('click', () => this.slide('next'));
        window.addEventListener('resize', () => {
            this.currentIndex = Math.min(
                this.currentIndex,
                this.slides.length - this.getSlidesPerView()
            );
            this.updateSlider();
        });
    }

    slide(direction) {
        const maxIndex = this.slides.length - this.getSlidesPerView();
        
        if (direction === 'next' && this.currentIndex < maxIndex) {
            this.currentIndex++;
        } else if (direction === 'prev' && this.currentIndex > 0) {
            this.currentIndex--;
        }
        
        this.updateSlider();
    }

    enableTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;

        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const difference = touchStartX - touchEndX;

            if (Math.abs(difference) > 50) {
                this.slide(difference > 0 ? 'next' : 'prev');
            }
        });
    }
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialSlider();
});

const slider1 = document.querySelector('.slider1');
const slides1 = document.querySelectorAll('.slide1');
const prevButton1 = document.querySelector('.prev1');
const nextButton1 = document.querySelector('.next1');
let currentIndex1 = 0;

function isMobile() {
    return window.innerWidth <= 768;
}

function updateSlider1() {
    const slideWidth = isMobile() ? 100 : 100/3;
    const transformValue = -(currentIndex1 * slideWidth);
    slider1.style.transform = `translateX(${transformValue}%)`;
    
    // Update button states
    if (isMobile()) {
        prevButton1.disabled = currentIndex1 === 0;
        nextButton1.disabled = currentIndex1 === slides1.length - 1;
    } else {
        prevButton1.disabled = currentIndex1 === 0;
        nextButton1.disabled = currentIndex1 === slides1.length - 3;
    }
}

function nextSlide1() {
    const maxIndex = isMobile() ? slides1.length - 1 : slides1.length - 3;
    if (currentIndex1 < maxIndex) {
        currentIndex1++;
        updateSlider1();
    }
}

function prevSlide1() {
    if (currentIndex1 > 0) {
        currentIndex1--;
        updateSlider1();
    }
}

// Event Listeners
prevButton1.addEventListener('click', prevSlide1);
nextButton1.addEventListener('click', nextSlide1);

// Touch support
let touchStartX1 = 0;
let touchEndX1 = 0;

slider1.addEventListener('touchstart', e => {
    touchStartX1 = e.changedTouches[0].screenX;
});

slider1.addEventListener('touchend', e => {
    touchEndX1 = e.changedTouches[0].screenX;
    if (touchStartX1 - touchEndX1 > 50) {
        nextSlide1();
    } else if (touchEndX1 - touchStartX1 > 50) {
        prevSlide1();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reset position if needed when switching between mobile and desktop
    if (isMobile() && currentIndex1 > slides1.length - 1) {
        currentIndex1 = slides1.length - 1;
    }
    updateSlider1();
});

// Initial setup
updateSlider1();