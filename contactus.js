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