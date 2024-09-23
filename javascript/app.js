document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("open");
  const closeModalBtn = document.getElementById("close");
  const form = document.querySelector('.modal-form');

  // Function to open the modal
  openModalBtn.addEventListener("click", function () {
      modal.classList.add("show-modal");
  });

  // Function to close the modal
  closeModalBtn.addEventListener("click", function () {
      modal.classList.remove("show-modal");
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", function (e) {
      if (e.target === modal) {
          modal.classList.remove("show-modal");
      }
  });

  // Simple form validation
  form.addEventListener('submit', function (event) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const persons = document.getElementById('p').value.trim();
      const contact = document.getElementById('p2').value.trim();
      
      if (!name || !email || !persons || !contact) {
          event.preventDefault(); // Prevent form submission
          alert("Please fill in all fields before submitting.");
      } else {
          alert("Thank you for booking!");
      }
  });


  // Smooth scroll functionality (example)
  document.querySelector('.menu').addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('.Menu').scrollIntoView({
          behavior: 'smooth'
      });
  });
});
