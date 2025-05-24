// Smooth scrolling to sections
document.getElementById('myName').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('DOMContentLoaded', function() {
  // Show the description after 3 seconds
  setTimeout(function() {
    document.getElementById('description').classList.add('show');
  }, 1200);

  // Smooth scroll to top when clicking your name
  document.getElementById('myName').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
