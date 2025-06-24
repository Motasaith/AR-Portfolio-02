AOS.init({ duration: 800, once: false });

const header = document.querySelector('header');
const scrollToTop = document.getElementById('scrollToTop');

// Blur header on scroll & show scroll button
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
  scrollToTop.classList.toggle('show', window.scrollY > 300);
});

// Smooth nav scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    document.getElementById('nav-menu').classList.remove('active');
  });
});

// Toggle mobile menu
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('active');
});

// Scroll-to-top action
scrollToTop.addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
});
