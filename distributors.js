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

 // Dealership data
 const dealerships = [
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Agra, Uttar Pradesh-282001",
      state: "Uttar Pradesh"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, LDA Colony, Lucknow, Uttar Pradesh-226012",
      state: "Uttar Pradesh"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Transport Office Lucknow, Transport Nagar, Lucknow, Uttar Pradesh-226012",
      state: "Uttar Pradesh"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Uttar Pradesh-224182",
      state: "Uttar Pradesh"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Pathshala High School, Chuna Bhati Tea Garden D, Jalpaiguri, West Bengal-735207",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, 514, Jharkhand-112",
      state: "Jharkhand"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Buddha Nagar, Uttar Pradesh-201306",
      state: "Uttar Pradesh"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, West Bengal-712147",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, 14, Pankha Road, Churu, Rajasthan-331001",
      state: "Rajasthan"
    },
    {
      name: "ABC EV Automotive World",
      type: "Coco Showroom",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Vadodara Road, Dabhoi, Gujarat - 391110",
      state: "Gujarat"
    },
    {
      name: "ABC EV Automotive World",
      type: "Coco Showroom",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Vadodara, Gujarat-390019",
      state: "Gujarat"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
    {
      name: "ABC EV Automotive World",
      type: "Dealer",
      address: "31/157-D, Mahavir Mandir, Hansraj Road, Medinipur, West Bengal-721211",
      state: "West Bengal"
    },
  ];

  // Function to create dealer card
  function createDealerCard(dealer) {
    return `
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card dealer-card">
          <div class="card-body">
            <h5 class="dealer-title">${dealer.name}</h5>
            <div class="dealer-badge ${dealer.type === 'Coco Showroom' ? 'coco-badge' : ''}">${dealer.type}</div>
            <div class="dealer-location">
              <i class="fas fa-map-marker-alt"></i>
              <div>${dealer.address}</div>
            </div>
            <div class="dealer-state">
              <i class="fa-solid fa-paper-plane"></i>
              <div>${dealer.state}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Function to display all dealers
  function displayDealers(dealers) {
    const dealerResults = document.getElementById('dealerResults');
    const noResults = document.getElementById('noResults');
    
    if (dealers.length === 0) {
      dealerResults.innerHTML = '';
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
      dealerResults.innerHTML = dealers.map(dealer => createDealerCard(dealer)).join('');
    }
  }

  // Search functionality
  function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      
      const filteredDealers = dealerships.filter(dealer => {
        return (
          dealer.name.toLowerCase().includes(searchTerm) ||
          dealer.address.toLowerCase().includes(searchTerm) ||
          dealer.state.toLowerCase().includes(searchTerm)
        );
      });
      
      displayDealers(filteredDealers);
    });
  }

  // Initialize the page
  document.addEventListener('DOMContentLoaded', () => {
    displayDealers(dealerships);
    setupSearch();
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