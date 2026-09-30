const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
const mobileViewport = window.matchMedia('(max-width: 70rem)');

function setMenuOpen(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Luk menu' : 'Åbn menu');
  navigation.hidden = mobileViewport.matches && !open;
}

function updateNavigation() {
  menu.hidden = !mobileViewport.matches;
  setMenuOpen(false);
}

menu.addEventListener('click', () => {
  setMenuOpen(menu.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menu.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.header') && menu.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
  }
});

mobileViewport.addEventListener('change', updateNavigation);
updateNavigation();

const form = document.querySelector('#contact-form');

if (form) {
  const fields = document.querySelector('#contact-fields');
  const result = document.querySelector('#contact-result');
  const status = document.querySelector('#contact-status');
  const mailLink = document.querySelector('#contact-mail');
  const name = form.elements.namedItem('name');
  const phone = form.elements.namedItem('phone');
  const email = form.elements.namedItem('email');

  fields.disabled = false;

  function validateFields() {
    name.setCustomValidity(name.value.trim() ? '' : 'Skriv dit navn.');

    const phoneValue = phone.value.trim();
    const digits = phoneValue.replace(/\D/g, '');
    const validPhone = /^\+?[\d\s().-]+$/.test(phoneValue)
      && digits.length >= 8 && digits.length <= 15;
    phone.setCustomValidity(validPhone ? '' : 'Skriv et gyldigt telefonnummer med 8 til 15 cifre.');

    email.setCustomValidity('');
    if (!email.value.trim() || email.validity.typeMismatch) {
      email.setCustomValidity('Skriv en gyldig e-mailadresse.');
    }
  }

  form.addEventListener('input', () => {
    validateFields();
    result.hidden = true;
    status.textContent = '';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateFields();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const body = [
      'Hej PR Tryghed,',
      '',
      'Jeg vil gerne kontaktes.',
      '',
      `Navn: ${data.get('name').trim()}`,
      `Telefon: ${data.get('phone').trim()}`,
      `E-mail: ${data.get('email').trim()}`,
      '',
      data.get('message').trim(),
    ].join('\n');

    mailLink.href = `mailto:${form.dataset.email}`
      + `?subject=${encodeURIComponent('Jeg vil gerne kontaktes')}`
      + `&body=${encodeURIComponent(body)}`;
    result.hidden = false;
    status.textContent = 'Din besked er klar. Åbn dit e-mailprogram og send den derfra. Hjemmesiden har ikke sendt din besked.';
    mailLink.focus();
  });

  validateFields();
}
