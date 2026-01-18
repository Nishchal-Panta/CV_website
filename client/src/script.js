import ScrollReveal from 'scrollreveal';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false // Animations happen only once
  });

  sr.reveal('.reveal-bottom');
  sr.reveal('.reveal-left', { origin: 'left' });
  sr.reveal('.reveal-right', { origin: 'right' });
  sr.reveal('.reveal-card', { interval: 100 });

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-sm', 'bg-white/90');
      navbar.classList.remove('bg-white/80');
    } else {
      navbar.classList.remove('shadow-sm', 'bg-white/90');
      navbar.classList.add('bg-white/80');
    }
  });

  // CV Modal Logic
  const cvBtn = document.getElementById('view-cv-btn');
  const cvModal = document.getElementById('cv-modal');
  const cvCloseBtn = document.getElementById('cv-close-btn');
  const cvBackdrop = document.getElementById('cv-modal-backdrop');

  function openModal() {
    cvModal.classList.remove('hidden');
    cvModal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  function closeModal() {
    cvModal.classList.add('hidden');
    cvModal.classList.remove('flex');
    document.body.style.overflow = ''; // Restore scrolling
  }

  if (cvBtn) cvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
  
  if (cvCloseBtn) cvCloseBtn.addEventListener('click', closeModal);
  if (cvBackdrop) cvBackdrop.addEventListener('click', closeModal);
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !cvModal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
