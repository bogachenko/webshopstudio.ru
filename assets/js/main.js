(() => {
  document.documentElement.classList.add('js-enabled');

  const YANDEX_METRICA_ID = 111111111;

  const loadYandexMetrica = () => {
    if (!YANDEX_METRICA_ID || typeof window.ym === 'function') {
      return;
    }

    window.ym = window.ym || function ymStub() {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
    window.ym.l = 1 * new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://mc.yandex.ru/metrika/tag.js';

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    window.ym(YANDEX_METRICA_ID, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  };

  const cookieBanner = document.getElementById('cookie-banner');
  const cookieBannerAccept = document.getElementById('cookie-banner-accept');
  const hasCookieConsent = localStorage.getItem('cookieConsent') === 'true';

  if (hasCookieConsent) {
    loadYandexMetrica();
  }

  if (cookieBanner && cookieBannerAccept && !hasCookieConsent) {
    window.setTimeout(() => {
      cookieBanner.classList.remove('hidden');
      cookieBanner.classList.add('cookie-banner-visible');
    }, 1500);

    cookieBannerAccept.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'true');
      loadYandexMetrica();

      cookieBanner.classList.remove('cookie-banner-visible');
      cookieBanner.classList.add('cookie-banner-hidden');

      window.setTimeout(() => {
        cookieBanner.classList.add('hidden');
      }, 300);
    });
  }

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

        if (typeof window.ym === 'function') {
          window.ym(YANDEX_METRICA_ID, 'reachGoal', 'contact_form_success');
        }

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