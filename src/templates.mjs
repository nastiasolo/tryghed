import { homeCopy, insuranceCategories, pages, site, steps } from './content.mjs';
import {
  actions, breadcrumb, button, icon, insuranceCard,
  multiline, notice, pageHero, pageUrl, picture, serviceCards,
} from './components.mjs';

function processSection() {
  return `<section class="process section" aria-labelledby="process-heading">
    <div class="container">
      <div class="section__header section__header--center">
        <p class="eyebrow">Fra spørgsmål til overblik</p>
        <h2 class="section__title" id="process-heading">Det starter med en samtale.</h2>
        <p class="section__intro">Et par enkle overvejelser kan hjælpe dig på vej.</p>
      </div>
      <ol class="process__steps">${steps.map((step, index) => `
        <li class="process__step">
          <span class="process__number" aria-hidden="true">0${index + 1}</span>
          <h3 class="process__title">${step.title}</h3>
          <p class="process__text">${step.text}</p>
        </li>`).join('')}
      </ol>
    </div>
  </section>`;
}

function servicesSection() {
  return `<section class="section" aria-labelledby="services-heading">
    <div class="container">
      <div class="section__header section__header--split">
        <div>
          <p class="eyebrow">Dine muligheder</p>
          <h2 class="section__title" id="services-heading">${homeCopy.servicesHeading}</h2>
        </div>
        <p class="section__intro">${homeCopy.servicesIntro}</p>
      </div>
      ${serviceCards()}
    </div>
  </section>`;
}

export function home() {
  return `<section class="hero" aria-labelledby="hero-heading">
    <div class="container hero__inner">
      <div class="hero__content">
        <p class="eyebrow hero__eyebrow">${homeCopy.eyebrow}</p>
        <h1 class="hero__title" id="hero-heading">${multiline(homeCopy.heading)}</h1>
        <p class="hero__intro">${homeCopy.intro}</p>
        ${actions()}
        <a class="hero__phone" href="${site.phoneHref}">${icon('phone')}
          Eller tag fat i os på <strong>${site.phone}</strong></a>
      </div>
      <div class="hero__visual">
        ${picture('welcome', 'hero__image', true)}
        <div class="hero__caption">
          <span class="hero__badge">${icon('conversation')}</span>
          <div>
            <p class="hero__caption-title">Plads til dine spørgsmål</p>
            <p class="hero__caption-text">En samtale om det, der betyder noget.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  ${servicesSection()}
  <section class="story section" aria-labelledby="story-heading">
    <div class="container story__inner">
      <div class="story__visual">
        ${picture('everyday', 'story__image')}
        <div class="story__note">Det er din hverdag.<br>Og din tryghed.</div>
      </div>
      <div class="story__content">
        <p class="eyebrow">${homeCopy.storyEyebrow}</p>
        <h2 class="story__title" id="story-heading">${multiline(homeCopy.storyHeading)}</h2>
        <p class="story__lead">${homeCopy.storyText}</p>
        <p class="story__text">${homeCopy.storyDetail}</p>
        ${button('Lær PR Tryghed at kende', pageUrl(pages.about), 'outline')}
      </div>
    </div>
  </section>
  ${processSection()}`;
}

export function standard(page) {
  let content = pageHero(page);

  if (page === pages.overview) {
    return content + servicesSection() + processSection();
  }

  content += `<section class="section"><div class="container">
    ${page.notice ? notice(page.notice) : ''}`;

  if (page === pages.insurance) {
    content += `<div class="section__header">
      <p class="eyebrow">Find dit område</p>
      <h2 class="section__title">Forsikringer i hverdagen</h2>
      <p class="section__intro">Hvad vil du gerne passe på? Start med de områder, der fylder i din hverdag.</p>
    </div>
    <div class="insurancegrid">${insuranceCategories.map(insuranceCard).join('')}
      <div class="insurance insurance--contact">
        ${icon('conversation', 'insurance__icon')}
        <h3 class="insurance__title">Et andet spørgsmål?</h3>
        <p class="insurance__text">Er du i tvivl om, hvor du skal starte? Tag fat i os, og fortæl, hvad du gerne vil vide.</p>
        <a class="textlink" href="${pageUrl(pages.contact)}">Lad os tale sammen ${icon('arrow')}</a>
      </div>
    </div>`;
  } else {
    content += `<div class="editorial">${page.sections.map((section, index) => `
      <section class="editorial__section" aria-labelledby="section-${index}">
        <span class="editorial__number" aria-hidden="true">0${index + 1}</span>
        <div>
          <h2 class="editorial__title" id="section-${index}">${section.heading}</h2>
          <p class="editorial__text">${section.text}</p>
        </div>
      </section>`).join('')}</div>`;
  }

  content += '</div></section>';

  if (page === pages.advice) {
    content += `<section class="proposal">
      <div class="container proposal__inner">
        <p class="eyebrow">Sådan foregår det</p>
        <h2 class="section__title">Kom godt fra start</h2>
        <p class="section__intro">Find gerne dine nuværende forsikringer frem, og overvej, hvad du gerne vil have ud af samtalen. Vi aftaler rammerne for et eventuelt forløb, før du tager stilling til at gå videre.</p>
      </div>
    </section>${processSection()}`;
  }

  return content;
}

function contactDetails() {
  return `<div class="contact__details">
    <a class="contact__method" href="${site.phoneHref}">
      <span class="contact__icon">${icon('phone')}</span>
      <span><span class="contact__label">Ring til os</span>
        <span class="contact__value">${site.phone}</span></span>
      ${icon('arrow')}
    </a>
    <a class="contact__method" href="mailto:${site.email}">
      <span class="contact__icon">${icon('mail')}</span>
      <span><span class="contact__label">Skriv til os</span>
        <span class="contact__value">${site.email}</span></span>
      ${icon('arrow')}
    </a>
  </div>`;
}

export function contact() {
  return `<section class="contact section">
    <div class="container">
      ${breadcrumb(pages.contact)}
      <div class="contact__grid">
        <div class="contact__copy">
          <p class="eyebrow">Bliv kontaktet</p>
          <h1 class="contact__title">Lad os tale om<br>din tryghed.</h1>
          <p class="contact__intro">Har du et spørgsmål eller lyst til en samtale? Ring, skriv, eller klargør en e-mail her på siden.</p>
          ${contactDetails()}
          <p class="contact__note">Vil du hellere aftale et møde?</p>
          <a class="textlink" href="${pageUrl(pages.booking)}">Se mulighederne ${icon('arrow')}</a>
        </div>
        <div class="formpanel">
          <h2 class="formpanel__title">Hvad kan vi tale om?</h2>
          <p class="formpanel__intro" id="form-help">Udfyld felterne, og åbn beskeden i dit eget e-mailprogram. Du sender selv e-mailen derfra.</p>
          <form class="form" id="contact-form" data-email="${site.email}" aria-describedby="form-help">
            <fieldset class="form__fields" id="contact-fields" disabled>
              <legend class="sr-only">Dine kontaktoplysninger</legend>
              <div class="form__field">
                <label class="form__label" for="name">Navn <span class="form__required">(påkrævet)</span></label>
                <input class="form__input" type="text" id="name" name="name" autocomplete="name" maxlength="100" required>
              </div>
              <div class="form__row">
                <div class="form__field">
                  <label class="form__label" for="phone">Telefon <span class="form__required">(påkrævet)</span></label>
                  <input class="form__input" type="tel" id="phone" name="phone" autocomplete="tel" maxlength="30" required aria-describedby="phone-help">
                  <span class="form__hint" id="phone-help">Fx 32 26 58 30 eller +45 32 26 58 30</span>
                </div>
                <div class="form__field">
                  <label class="form__label" for="email">E-mail <span class="form__required">(påkrævet)</span></label>
                  <input class="form__input" type="email" id="email" name="email" autocomplete="email" maxlength="254" required>
                </div>
              </div>
              <div class="form__field">
                <label class="form__label" for="message">Besked <span class="form__required">(valgfrit)</span></label>
                <textarea class="form__input form__input--message" id="message" name="message" rows="4" maxlength="1500" placeholder="Hvad vil du gerne tale om?"></textarea>
                <span class="form__hint">Undlad CPR-nummer, helbredsoplysninger og andre følsomme oplysninger.</span>
              </div>
              <button class="button button--primary form__submit" type="submit">Klargør e-mail ${icon('arrow')}</button>
            </fieldset>
            <noscript><p>Formularen kræver JavaScript. Skriv direkte til <a href="mailto:${site.email}">${site.email}</a>, eller ring på <a href="${site.phoneHref}">${site.phone}</a>.</p></noscript>
            <div class="form__result" id="contact-result" hidden>
              <p class="form__result-text" id="contact-status" role="status"></p>
              <a class="button button--primary" id="contact-mail" href="mailto:${site.email}">Åbn e-mail og send ${icon('mail')}</a>
              <p class="form__hint">Åbner dit e-mailprogram ikke? Skriv til ${site.email}, eller ring på ${site.phone}.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

export function booking() {
  return `<section class="contact section">
    <div class="container">
      ${breadcrumb(pages.booking)}
      <div class="contact__grid">
        <div class="contact__copy">
          <p class="eyebrow">Book møde</p>
          <h1 class="contact__title">Find tid til<br>et bedre overblik.</h1>
          <p class="contact__intro">Lad os aftale en tid til at tale om dine spørgsmål. Kontakt os på telefon eller e-mail.</p>
          ${contactDetails()}
        </div>
        <div class="booking">
          ${icon('calendar', 'booking__icon')}
          <h2 class="booking__title">Lad os finde en tid</h2>
          ${site.bookingUrl ? `
            <p class="booking__text">Vælg en tid i vores mødebooking.</p>
            ${button('Gå til mødebooking', site.bookingUrl, 'primary', 'external')}` : `
            <p class="booking__text">Onlinebooking er endnu ikke tilgængelig. Ring eller skriv til os for at aftale et møde.</p>
            ${button('Ring og aftal et møde', site.phoneHref, 'primary', 'phone')}
            ${button('Skriv om et møde', `mailto:${site.email}?subject=${encodeURIComponent('Jeg vil gerne aftale et møde')}`, 'outline', 'mail')}`}
          <p class="booking__note">Et møde er først aftalt, når tidspunktet er bekræftet.</p>
        </div>
      </div>
    </div>
  </section>`;
}
