// Set up accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const parent = header.parentElement;
    
    // Toggle active state
    parent.classList.toggle('active');
    
    // Toggle content visibility
    if (parent.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});