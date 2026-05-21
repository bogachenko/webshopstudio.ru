(() => {
  document.documentElement.classList.add('js-enabled');

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }

  const fadeItems = document.querySelectorAll('.fade-in');
  if (!fadeItems.length) return;

  if (!('IntersectionObserver' in window)) {
    fadeItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, intersectionObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        intersectionObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    },
  );

  fadeItems.forEach((item) => observer.observe(item));
})();
