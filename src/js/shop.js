// function showPage(pageNumber) {
//     // Hide all product containers
//     const containers = document.querySelectorAll('.s-product-container');
//     containers.forEach(container => {
//       container.style.display = 'none';
//     });

//     // Show the selected page container
//     document.getElementById(`page-${pageNumber}`).style.display = 'flex';

//     // Update pagination button styles
//     const buttons = document.querySelectorAll('.page-button');
//     buttons.forEach(button => {
//       button.classList.remove('active');
//     });
//     document.getElementById(`page-btn-${pageNumber}`).classList.add('active');
//   }

//   // Show the first page by default
//   showPage(1);

// function showPage(pageNumber) {
//     // Hide all product containers
//     const containers = document.querySelectorAll('.s-product-container');
//     containers.forEach(container => {
//       container.style.display = 'none';
//     });
  
//     // Show the selected page container
//     const selectedPage = document.getElementById(`page-${pageNumber}`);
//     selectedPage.style.display = 'flex';
  
//     // Scroll to the top of the page
//     window.scrollTo({ top: 0, behavior: 'smooth' });
  
//     // Update pagination button styles
//     const buttons = document.querySelectorAll('.page-button');
//     buttons.forEach(button => {
//       button.classList.remove('active');
//     });
//     document.getElementById(`page-btn-${pageNumber}`).classList.add('active');
//   }
  
//   // Show the first page by default
//   showPage(1);

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

  