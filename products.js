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

const rickshaws = [
  {
    id: 1,
    name: "LUKA R2 PINK",
    image: "./productsImage/product1.svg",
    link: "/product-details.html",
  },
  {
    id: 2,
    name: "LUKA R2 BLUE",
    image: "./productsImage/product2.svg",
    link: "/product-details.html",
  },
  {
    id: 3,
    name: "LUKA R2 GREEN",
    image: "./productsImage/product3.svg",
    link: "/product-details.html",
  },
  {
    id: 4,
    name: "LUKA R2 YELLOW",
    image: "./productsImage/product4.svg",
    link: "/product-details.html",
  },
  {
    id: 5,
    name: "LUKA R2 WHITE",
    image: "./productsImage/product5.svg",
    link: "/product-details.html",
  },
  {
    id: 6,
    name: "KHALSA GRAND LITHIUM",
    image: "./productsImage/product6.svg",
    link: "/product-details.html",
  },
  {
    id: 7,
    name: "KHALSA HD LOADER EV 2",
    image: "./productsImage/product7.svg",
    link: "/product-details.html",
  },
  {
    id: 8,
    name: "KHALSA PRO+",
    image: "./productsImage/product8.svg",
    link: "/product-details.html",
  },
  {
    id: 9,
    name: "ECO RIDER X1",
    image: "./productsImage/product5.svg",
    link: "/product-details.html",
  },
  {
    id: 10,
    name: "GREEN MOVER",
    image: "./productsImage/product1.svg",
    link: "/product-details.html",
  },
  {
    id: 11,
    name: "CITY CRUISER",
    image: "./productsImage/product2.svg",
    link: "/product-details.html",
  },
  {
    id: 12,
    name: "URBAN TRANSPORTER",
    image: "./productsImage/product3.svg",
    link: "/product-details.html",
  },
];

// Pagination configuration
const itemsPerPage = 8;
let currentPage = 1;

// Function to display rickshaws for the current page
function displayRickshaws() {
  const container = document.getElementById("rickshaw-container");
  container.innerHTML = "";

  // Calculate starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, rickshaws.length);

  // Display rickshaws for the current page
  for (let i = startIndex; i < endIndex; i++) {
    const rickshaw = rickshaws[i];

    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-lg-4";

    col.innerHTML = `
            <div class="card">
                <div class="card-img-container">
                    <img src="${rickshaw.image}" alt="${rickshaw.name}">
                </div>
                <button class="card-footer" data-id="${rickshaw.id}">
                    ${rickshaw.name}
                </button>
            </div>
        `;

        const button = col.querySelector('.card-footer');
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            window.location.href = `/product-details${productId}.html`;
        });

    container.appendChild(col);
  }

  // Update pagination
  updatePagination();
}

// Function to update pagination controls
function updatePagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  // Calculate total number of pages
  const totalPages = Math.ceil(rickshaws.length / itemsPerPage);

  // Previous button
  const prevLi = document.createElement("li");
  prevLi.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
  prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true"><i class="fa-solid fa-arrow-left-long"></i></span></a>`;
  prevLi.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayRickshaws();
      window.scrollTo(0, 0);
    }
  });
  pagination.appendChild(prevLi);

  // Page number buttons
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener("click", function (e) {
      e.preventDefault();
      currentPage = i;
      displayRickshaws();
      window.scrollTo(0, 0);
    });
    pagination.appendChild(li);
  }

  // Next button
  const nextLi = document.createElement("li");
  nextLi.className = `page-item ${
    currentPage === totalPages ? "disabled" : ""
  }`;
  nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true"><i class="fa-solid fa-arrow-right-long"></i></span></a>`;
  nextLi.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      displayRickshaws();
      window.scrollTo(0, 0);
    }
  });
  pagination.appendChild(nextLi);
}

// Initialize the display
document.addEventListener("DOMContentLoaded", function () {
  displayRickshaws();
});
