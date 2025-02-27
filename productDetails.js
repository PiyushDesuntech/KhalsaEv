document.addEventListener("DOMContentLoaded", function () {
    // Close navbar when clicking on a link
    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse.classList.contains("show")) {
          bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
      });
    });
  
    // Close navbar when clicking outside
    document.addEventListener("click", function (event) {
      const navbarCollapse = document.getElementById("navbarNav");
      const navbarToggler = document.querySelector(".navbar-toggler");
  
      // Check if navbar is open and click is outside navbar and not on the toggle button
      if (
        navbarCollapse.classList.contains("show") &&
        !navbarCollapse.contains(event.target) &&
        event.target !== navbarToggler &&
        !navbarToggler.contains(event.target)
      ) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enquiryForm');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    
    // Phone number validation pattern
    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    
    // Email validation pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Custom validation
    function validateField(field, isValid, message) {
        if (!isValid) {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
            if (message) {
                field.nextElementSibling.textContent = message;
            }
            return false;
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
            return true;
        }
    }
    
    // Real-time validation for email
    email.addEventListener('input', function() {
        validateField(email, emailPattern.test(email.value), 'Please enter a valid email address.');
    });
    
    // Real-time validation for phone
    phoneNumber.addEventListener('input', function() {
        validateField(phoneNumber, phonePattern.test(phoneNumber.value), 'Please enter a valid phone number.');
    });
    
    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        let isFormValid = true;
        
        // Check all required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            let isValid = field.value.trim() !== '';
            
            // Additional validation for email and phone
            if (field.id === 'email') {
                isValid = emailPattern.test(field.value);
            } else if (field.id === 'phoneNumber') {
                isValid = phonePattern.test(field.value);
            }
            
            if (!validateField(field, isValid)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            // Here you would normally send the form data to a server
            alert('Form submitted successfully!');
            form.reset();
            // Remove validation classes
            requiredFields.forEach(field => {
                field.classList.remove('is-valid');
            });
        }
    });
});