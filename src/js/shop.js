document.querySelectorAll('.s-product').forEach(product => {
  product.addEventListener('click', function(event) {
    // Check if the click was on the cart button
    if (event.target.closest('.cart-button')) {
      event.stopPropagation();
      event.preventDefault(); 
      swal("Added to Cart!", "You have successfully added the item to your cart.", "success");
    } else {
      // Navigate to product details page
      window.location.href = 'product-details.html';
    }
  });
});

function showPage(pageNumber) {
  // Hide all product containers
  const containers = document.querySelectorAll('.s-product-container');
  containers.forEach(container => {
    container.style.display = 'none';
  });

  // Show the selected page container
  const selectedPage = document.getElementById(`page-${pageNumber}`);
  selectedPage.style.display = 'flex';

  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update pagination button styles
  const buttons = document.querySelectorAll('.page-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  document.getElementById(`page-btn-${pageNumber}`).classList.add('active');

  // Save the current page number in localStorage
  localStorage.setItem('currentPage', pageNumber);
}

// Function to initialize the page
function initPage() {
  // Get the saved page number from localStorage
  const savedPage = localStorage.getItem('currentPage') || 1;
  showPage(parseInt(savedPage, 10));
}

// Initialize the page on load
initPage();

  