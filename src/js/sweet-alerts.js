document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior

      // SweetAlert
      swal("Added to Cart!", "You have successfully added the item to your cart.", "success");
    });
  });

  document.querySelectorAll('.submit-button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior

      // SweetAlert
      swal("Email Sent!", "You have successfully sent an email to Tincture.", "success");
    });
  });

  document.querySelectorAll('.checkout-button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior

      // SweetAlert
      swal("Checkout Complete!", "You have successfully completed your purchase.", "success");
    });
  });
