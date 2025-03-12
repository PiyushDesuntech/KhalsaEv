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

const content = [
    {
        title: "Eco-Friendly",
        title1: " EV Rickshaw",
        description: "Experience eco-friendly travel with Khalsa EV's 'Book Your Ride' service. Enjoy smooth, efficient transportation powered by clean energy.",
        image: "./images/auto1.gif",
        background: "./images/BG.svg"
    },
    {
        title: "Modern ",
        title1: "Electric Vehicle",
        description: "Discover the future of transportation with our advanced electric vehicles. Safe, reliable, and environmentally conscious.",
        image: "./images/auto1.gif",
        background: "./images/BG.svg"
    },
    {
        title: "Zero ",
        title1: "Emission Vehicle",
        description: "Join the green revolution with our zero-emission vehicles. Perfect for urban mobility while protecting our environment.",
        image: "./images/auto1.gif",
        background: "./images/BG.svg"
    }
];

function changeTab(tabNumber) {
    // Update content
    const index = tabNumber - 1;
    document.getElementById('title').textContent = content[index].title;
    document.getElementById('title1').textContent = content[index].title1;
    document.getElementById('description').textContent = content[index].description;
    document.getElementById('vehicleImage').src = content[index].image;
    
    // Update background with fade effect
    const heroBackground = document.getElementById('heroBackground');
    heroBackground.style.opacity = '0';
    
    setTimeout(() => {
        heroBackground.style.backgroundImage = `url(${content[index].background})`;
        heroBackground.style.opacity = '1';
    }, 500);

    // Update active tab
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelectorAll('.tab-button')[index].classList.add('active');
}

// Initialize first background
document.getElementById('heroBackground').style.backgroundImage = `url(${content[0].background})`;


// Contact form
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