import { navigation, pages, photos, services, site } from './content.mjs';

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

export function multiline(value) {
  return escapeHtml(value).replaceAll('\n', '<br>');
}

export function pageUrl(page) {
  return page.slug ? `/${page.slug}/` : '/';
}

const paths = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  external: '<path d="M7 17 17 7M7 7h10v10"/>',
  phone: '<path d="m8 3 3 5-3 3a15 15 0 0 0 5 5l3-3 5 3c0 3-2 5-5 5C9 20 4 15 3 8c0-3 2-5 5-5Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
  conversation: '<path d="M15 14H8l-5 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a3 3 0 0 1-3 3Z"/><path d="M9 18h7l5 3V10M7 7h8M7 10h5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
  home: '<path d="m3 10 9-7 9 7M5 9v12h14V9M10 21v-8h4v8"/>',
  car: '<path d="m5 9 2-6h10l2 6M3 10l2-1h14l2 1v8H3v-8ZM5 18v3m14-3v3M6 13h2m8 0h2"/>',
  sofa: '<path d="M5 12V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6M5 16h14M5 12a2 2 0 0 0-4 0v7h22v-7a2 2 0 0 0-4 0v4M5 12v4M4 19v2m16-2v2"/>',
  heart: '<path d="M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8-1c-5 5 3 12 8 16 5-4 13-11 8-16Z"/>',
  health: '<rect x="3" y="6" width="18" height="15" rx="2"/><path d="M8 6V3h8v3m-4 5v6m-3-3h6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v5m10-5v5M3 11h18m-14 4h3m4 0h3"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};

export function icon(name, className = '') {
  return `<svg class="icon ${className}" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true" focusable="false">${paths[name]}</svg>`;
}

export function button(label, href, variant = 'primary', symbol = 'arrow') {
  return `<a class="button button--${variant}" href="${escapeHtml(href)}">
    ${escapeHtml(label)}${icon(symbol)}</a>`;
}

export function actions(inverse = false) {
  return `<div class="actions">
    ${button('Bliv kontaktet', pageUrl(pages.contact), inverse ? 'mint' : 'primary')}
    ${button('Book møde', pageUrl(pages.booking), inverse ? 'inverse' : 'outline', 'calendar')}
  </div>`;
}

export function picture(name, className, eager = false) {
  const photo = photos[name];
  return `<img class="${className}" src="${escapeHtml(photo.src)}"
    alt="${escapeHtml(photo.alt)}" width="${photo.width}" height="${photo.height}"
    ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

export function header(currentPage) {
  const links = navigation.map((page) => {
    const active = page === currentPage || (
      page === pages.overview &&
      [pages.advice, pages.insurance].includes(currentPage)
    );
    const current = page === currentPage ? ' aria-current="page"' : '';
    return `<a class="navigation__link${active ? ' navigation__link--active' : ''}"
      href="${pageUrl(page)}"${current}>${page.label}</a>`;
  }).join('');

  return `<a class="skip" href="#indhold">Gå til indhold</a>
  <div class="utility">
    <div class="container utility__inner">
      <span class="utility__message">Lad os tale om din tryghed</span>
      <div class="utility__links">
        <a class="utility__link" href="${site.phoneHref}">${icon('phone')}${site.phone}</a>
        <a class="utility__link utility__link--email" href="mailto:${site.email}">${icon('mail')}${site.email}</a>
      </div>
    </div>
  </div>
  <header class="header">
    <div class="container header__inner">
      <a class="brand" href="/" aria-label="PR Tryghed – forside">
        <img class="brand__logo" src="${site.logo}" width="3077" height="1608"
          alt="PR Tryghed">
      </a>
      <button class="menu" type="button" aria-controls="navigation"
        aria-expanded="false" aria-label="Åbn menu" hidden>
        <span class="menu__label">Menu</span>
        <span class="menu__lines" aria-hidden="true"></span>
      </button>
      <nav class="navigation" id="navigation" aria-label="Hovednavigation">
        <div class="navigation__links">
          ${links}
          <a class="navigation__link navigation__link--external"
            href="${site.externalUrl}">Pengerådgivning${icon('external')}</a>
        </div>
        <div class="navigation__actions">
          ${button('Bliv kontaktet', pageUrl(pages.contact), 'outline', 'phone')}
          ${button('Book møde', pageUrl(pages.booking))}
        </div>
      </nav>
    </div>
  </header>`;
}

export function footer() {
  return `<footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <a class="brand" href="/" aria-label="PR Tryghed – forside">
          <img class="footer__logo" src="${site.logo}" width="3077" height="1608"
            alt="PR Tryghed" loading="lazy">
        </a>
        <p class="footer__tagline">En samtale om det,<br>der betyder noget.</p>
      </div>
      <div class="footer__column">
        <h2 class="footer__heading">Find vej</h2>
        ${navigation.map((page) => `<a class="footer__link" href="${pageUrl(page)}">${page.label}</a>`).join('')}
        <a class="footer__link" href="${site.externalUrl}">Pengerådgivning ${icon('external')}</a>
      </div>
      <div class="footer__column">
        <h2 class="footer__heading">Dine muligheder</h2>
        ${services.map((service) => `<a class="footer__link" href="/${service.slug}/">${service.title}</a>`).join('')}
        <a class="footer__link" href="${pageUrl(pages.booking)}">Book møde</a>
      </div>
      <div class="footer__column">
        <h2 class="footer__heading">Lad os tale sammen</h2>
        <a class="footer__phone" href="${site.phoneHref}">${site.phone}</a>
        <a class="footer__link" href="mailto:${site.email}">${site.email}</a>
        <a class="footer__contact" href="${pageUrl(pages.contact)}">Bliv kontaktet ${icon('arrow')}</a>
      </div>
    </div>
    <div class="container footer__bottom">
      <span>© ${new Date().getFullYear()} PR Tryghed</span>
      <span class="footer__legal">CVR, adresse og juridiske oplysninger tilføjes før offentliggørelse.</span>
    </div>
  </footer>`;
}

export function cta() {
  return `<section class="cta" aria-labelledby="cta-heading">
    <div class="container cta__inner">
      <div class="cta__copy">
        <p class="eyebrow eyebrow--light">Lad os tage den første snak</p>
        <h2 class="cta__heading" id="cta-heading">Har du spørgsmål til<br>dine forsikringer?</h2>
        <p class="cta__text">Du behøver ikke have alle svarene. Start med dine spørgsmål.</p>
      </div>
      <div class="cta__contact">
        ${actions(true)}
        <a class="cta__phone" href="${site.phoneHref}">${icon('phone')} Eller ring på ${site.phone}</a>
      </div>
    </div>
  </section>`;
}

export function serviceCards() {
  return `<div class="services">${services.map((service, index) => `
    <a class="service service--${service.theme}" href="/${service.slug}/">
      <div class="service__top">
        ${icon(service.icon, 'service__icon')}
        <span class="service__number" aria-hidden="true">0${index + 1}</span>
      </div>
      <h3 class="service__title">${service.title}</h3>
      <p class="service__description">${service.description}</p>
      <span class="service__link">${service.linkLabel}
        <span class="service__arrow">${icon('arrow')}</span>
      </span>
    </a>`).join('')}</div>`;
}

export function insuranceCard(category) {
  return `<article class="insurance">
    ${icon(category.icon, 'insurance__icon')}
    <h3 class="insurance__title">${category.title}</h3>
    <p class="insurance__text">${category.text}</p>
    <a class="textlink" href="${pageUrl(pages.contact)}">Tal med os ${icon('arrow')}</a>
  </article>`;
}

export function breadcrumb(page) {
  return `<nav class="breadcrumb" aria-label="Brødkrumme">
    <a class="breadcrumb__link" href="/">Forside</a>
    <span class="breadcrumb__separator" aria-hidden="true">/</span>
    <span aria-current="page">${escapeHtml(page.label)}</span>
  </nav>`;
}

export function pageHero(page) {
  return `<section class="pagehero">
    <div class="container pagehero__inner">
      <div class="pagehero__content">
        ${breadcrumb(page)}
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1 class="pagehero__title">${multiline(page.heading)}</h1>
        <p class="pagehero__intro">${escapeHtml(page.intro)}</p>
        ${actions()}
      </div>
      <div class="pagehero__visual">${picture(page.photo, 'pagehero__image', true)}</div>
    </div>
  </section>`;
}

export function notice(text) {
  return `<p class="notice">${icon('compass')}<span>${escapeHtml(text)}</span></p>`;
}

export function document(page, content) {
  const html = `<!doctype html>
<html lang="da" class="document">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <meta name="theme-color" content="#154A42">
  <meta property="og:locale" content="da_DK">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="PR Tryghed">
  <meta property="og:title" content="${escapeHtml(page.title)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <link rel="icon" type="image/png" href="${site.logo}">
  <link rel="stylesheet" href="/styles.css">
  <script src="/app.js" defer></script>
</head>
<body class="site">
  ${header(page)}
  <main class="main" id="indhold" tabindex="-1">${content}${cta()}</main>
  ${footer()}
</body>
</html>
`;
  // Relative paths also make every page usable by opening the HTML file.
  const prefix = page.slug ? '../' : './';
  return html.replace(/(href|src)="\/([^\"]*)"/g, (_, attribute, path) => {
    const target = attribute === 'href' && (path === '' || path.endsWith('/'))
      ? `${path}index.html`
      : path;
    return `${attribute}="${prefix}${target}"`;
  });
}
