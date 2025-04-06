document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.icon');
        
        // Toggle the display of the answer
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          icon.textContent = '+';
        } else {
          answer.style.display = 'block';
          icon.textContent = '–';
        }
      });
    });
  });
  