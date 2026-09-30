# PR Tryghed

Responsiv dansk hjemmeside i ren HTML, CSS og JavaScript. Siderne bruger
projektets billeder og logo, lokale Open Sans-skrifttyper og fælles komponenter.

## Åbn hjemmesiden

Åbn `index.html` direkte i din browser. Alle undersider, billeder, skrifttyper
og links virker også lokalt uden en server.

Du kan også bruge en lokal server:

```sh
npm start
```

Åbn derefter <http://localhost:4173>.

## Redigér indhold og design

- `src/content.mjs`: tekster, kontaktoplysninger, billedvalg og bookinglink.
- `src/components.mjs`: fælles header, footer, knapper, kort og CTA.
- `src/templates.mjs`: sidernes opbygning.
- `styles.css`: alle farver som CSS-variabler, styling og responsive regler.
- `app.js`: mobilmenu og klargøring af kontaktmail.
- `images/`: de oprindelige billeder og logoer.
- `fonts/`: lokale Open Sans-filer og deres licens.

Når du ændrer indhold eller komponenter, genbyg HTML-filerne:

```sh
npm run build
```

Der kræves Node.js til at genbygge siderne. Bygningen har ingen npm-afhængigheder.
`npm start` bruger Python 3. Der er ingen automatiske tests efter ønske.
Ændringer i CSS og browser-JavaScript kræver kun genindlæsning af browseren.
Redigér kilderne frem for de genererede HTML-filer, som overskrives ved bygning.

## Sider

- `/` – forside
- `/forsikringsraadgivning/` – oversigt
- `/raadgivning/` – rådgivning
- `/forsikring/` – forsikringsområder
- `/ejerskifte/` – ejerskifte
- `/om-os/` – om PR Tryghed
- `/kontakt/` – kontaktformular
- `/book-moede/` – mødeaftale

X-siden er udeladt efter ønske. Siderne har deres indhold og metadata i HTML
og kan læses uden JavaScript. Mobilmenuen er foldet ud uden JavaScript.

## Kontakt og booking

Formularen validerer oplysningerne og opretter et `mailto:`-link. Besøgende
skal selv sende beskeden fra deres e-mailprogram. Hjemmesiden sender eller
gemmer ingen formularoplysninger og indeholder ingen backend.

Når bookinglinket er klar, udfyld `site.bookingUrl` i `src/content.mjs`, og
kør `npm run build`. Indtil da henviser bookingsiden til telefon og e-mail.

## Før offentliggørelse

Virksomheden skal godkende tekst og brug af billeder samt levere CVR,
adresse og nødvendige juridiske oplysninger. Disse oplysninger er ikke
opfundet; der er en markering i footeren. Der er ikke tilføjet analyseværktøjer,
cookies, eksterne fontkald eller tredjepartsscripts.

Teksterne er skrevet til PR Tryghed med inspiration fra
[Pengerådgivning](https://pengeraadgivning.dk/) og korte, selvstændige
beskrivelser af forsikringsområder baseret på
[Dit Forsikringshus](https://ditforsikringshus.dk/privat).
Der er ikke overført andre virksomheders priser, partnerskaber eller garantier.

Ved spørgsmål om de endelige virksomhedsoplysninger: info@prtryghed.dk.

Upload HTML-mapperne, `styles.css`, `app.js`, `images/` og `fonts/` til en
statisk webhost. Ingen applikationsserver er nødvendig i produktion.
