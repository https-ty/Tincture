document.querySelectorAll(".s-product").forEach((product) => {
  product.addEventListener("click", function (event) {
    if (event.target.closest(".cart-button")) {
      event.stopPropagation();
      event.preventDefault();
      swal(
        "Added to Cart!",
        "You have successfully added the item to your cart.",
        "success"
      );
    } else {
      window.location.href = "product-details.html";
    }
  });
});

function showPage(pageNumber) {
  const containers = document.querySelectorAll(".s-product-container");
  containers.forEach((container) => {
    container.style.display = "none";
  });

  const selectedPage = document.getElementById(`page-${pageNumber}`);
  selectedPage.style.display = "flex";

  window.scrollTo({ top: 0, behavior: "smooth" });

  const buttons = document.querySelectorAll(".page-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  document.getElementById(`page-btn-${pageNumber}`).classList.add("active");

  localStorage.setItem("currentPage", pageNumber);
}

function initPage() {
  const savedPage = localStorage.getItem("currentPage") || 1;
  showPage(parseInt(savedPage, 10));
}

initPage();
