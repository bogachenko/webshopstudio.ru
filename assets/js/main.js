(() => {
  document.documentElement.classList.add('js-enabled');

  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const statusNode = document.getElementById('contact-form-status');

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);

      const payload = {
        name: String(formData.get('name') || '').trim(),
        contactInfo: String(formData.get('contact-info') || '').trim(),
        websiteType: String(formData.get('website-type') || '').trim(),
        message: String(formData.get('message') || '').trim(),
      };

      if (!payload.contactInfo) {
        if (statusNode) {
          statusNode.textContent = 'Укажите телефон или мессенджер.';
          statusNode.className = 'text-center text-sm leading-6 text-red-600';
        }
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Отправляем...';
      }

      if (statusNode) {
        statusNode.textContent = '';
        statusNode.className = 'text-center text-sm leading-6 text-gray-500';
      }

      try {
        const response = await fetch('https://d5deu4utnuiliu31j48a.tmjd4m4j.apigw.yandexcloud.net', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        contactForm.reset();

        if (statusNode) {
          statusNode.textContent = 'Заявка отправлена. Мы свяжемся с вами.';
          statusNode.className = 'text-center text-sm leading-6 text-emerald-600';
        }
      } catch (error) {
        if (statusNode) {
          statusNode.textContent = 'Не удалось отправить заявку. Попробуйте позже.';
          statusNode.className = 'text-center text-sm leading-6 text-red-600';
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Отправить заявку';
        }
      }
    });
  }

  const fadeItems = document.querySelectorAll('.fade-in');

  if (fadeItems.length) {
    if (!('IntersectionObserver' in window)) {
      fadeItems.forEach((item) => item.classList.add('is-visible'));
    } else {
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
    }
  }
})();