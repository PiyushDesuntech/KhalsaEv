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


//   SLider

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


// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(error => {
        error.style.display = 'none';
    });
    
    let isValid = true;
    
    // First Name validation
    const firstName = document.getElementById('firstName');
    if (!firstName.value.trim()) {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }
    
    // Last Name validation
    const lastName = document.getElementById('lastName');
    if (!lastName.value.trim()) {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Phone validation
    const phone = document.getElementById('phone');
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    
    // Message validation
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Form is valid, you can submit it here
        alert('Form submitted successfully!');
        this.reset();
    }
});