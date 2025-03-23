document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
  
    // Smooth Scroll for Navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // GSAP Animation
    gsap.from('header', { duration: 1, y: -50, opacity: 0, ease: 'power3.out' });
    gsap.from('nav a', { duration: 1, opacity: 0, stagger: 0.2, ease: 'power3.out' });
  
    // Form Validation Example
    const emailLink = document.querySelector('a[href^="mailto:"]');
    emailLink.addEventListener('click', function(event) {
      const email = prompt('Please enter your email for verification:');
      if (!email || !validateEmail(email)) {
        alert('Invalid email. Please try again.');
        event.preventDefault();
      }
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  