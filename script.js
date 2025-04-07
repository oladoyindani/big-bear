document.addEventListener('DOMContentLoaded', () => {
  // FAQ Toggle Code
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('.icon');

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
      } else {
        answer.style.display = 'block';
        icon.textContent = '–';
      }
    });
  });

  // Hamburger Menu Toggle Code
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Slider Functionality
  const slides = document.querySelectorAll('.slide');
  const prevSlideBtn = document.getElementById('prevSlide');
  const nextSlideBtn = document.getElementById('nextSlide');
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  nextSlideBtn.addEventListener('click', nextSlide);
  prevSlideBtn.addEventListener('click', prevSlide);

  // Auto-play slider every 5 seconds
  setInterval(nextSlide, 5000);
});

  function formatNumber(n, isCurrency = false) {
    const formatted = n.toLocaleString();
    return isCurrency ? `₦${formatted}` : formatted;
  }

  function startCounter(el) {
    const target = +el.getAttribute("data-target");
    const isCurrency = el.getAttribute("data-format") === "currency";
    let count = 0;
    const step = target / 200;

    function updateCounter() {
      count += step;
      if (count < target) {
        el.textContent = formatNumber(Math.floor(count), isCurrency);
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = formatNumber(target, isCurrency);
      }
    }

    updateCounter();
  }

  // Optional: start when stats enter the viewport
  function initCounters() {
    const stats = document.querySelectorAll(".count");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          observer.unobserve(entry.target); // Only run once
        }
      });
    }, { threshold: 1 });

    stats.forEach(stat => observer.observe(stat));
  }

  document.addEventListener("DOMContentLoaded", initCounters);
