// Smooth scroll for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add more JS for interactivity or animations if needed 

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', function () {
    document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
  });
}); 