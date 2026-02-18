document.addEventListener('DOMContentLoaded', function() {
  // Get all FAQ question buttons
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Add click event listener to each FAQ question
  faqQuestions.forEach(function(button) {
    button.addEventListener('click', function() {
      // Toggle the 'active' class on the parent .faq-item
      this.parentElement.classList.toggle('active');
    });
  });
});
