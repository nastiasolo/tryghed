// Redigér tekster, kontaktoplysninger og sidernes adresser her.
// Marketingtekster skal godkendes af kunden før offentliggørelse.
export const site = {
  name: 'PR Tryghed',
  phone: '32 26 58 30',
  phoneHref: 'tel:+4532265830',
  email: 'info@prtryghed.dk',
  externalUrl: 'https://pengeraadgivning.dk/',
  // Indsæt det endelige bookinglink her, og kør npm run build.
  bookingUrl: '',
  logo: '/images/PRTryghed_stacked_gradient_master.png',
  whiteLogo: '/images/PRTryghed_stacked_gradient_master_hvid skrift.png',
};

export const photos = {
  welcome: {
    src: '/images/Møde velkomst_-3.jpg',
    alt: 'Et par bliver budt velkommen med et håndtryk.',
    width: 3408,
    height: 2272,
  },
  meeting: {
    src: '/images/Mødesituation_-19.jpg',
    alt: 'Tre personer taler sammen ved et mødebord.',
    width: 3408,
    height: 2272,
  },
  everyday: {
    src: '/images/Rækkehus-95.jpg',
    alt: 'En voksen og et barn går hånd i hånd gennem et grønt boligområde.',
    width: 3648,
    height: 5472,
  },
};

export const services = [
  {
    id: 'advice',
    slug: 'raadgivning',
    title: 'Rådgivning',
    description: 'Start med dine spørgsmål. Få en introduktion til rådgivning om dine forsikringer.',
    icon: 'conversation',
    linkLabel: 'Læs om rådgivning',
    theme: 'mint',
  },
  {
    id: 'insurance',
    slug: 'forsikring',
    title: 'Forsikring',
    description: 'Hjemmet, bilen og hverdagen. Find de forsikringsområder, der er relevante for dig.',
    icon: 'shield',
    linkLabel: 'Se forsikringsområder',
    theme: 'light',
  },
];

export const insuranceCategories = [
  { title: 'Husforsikring', icon: 'home', text: 'Dit hus er rammen om din hverdag. En husforsikring handler om selve bygningen og de skader, den kan blive udsat for.' },
  { title: 'Bilforsikring', icon: 'car', text: 'Når du er på farten, er det godt at kende din forsikring. Få overblik over ansvar, kasko og spørgsmål om din bil.' },
  { title: 'Indboforsikring', icon: 'sofa', text: 'Møbler, elektronik og alt det personlige. Indboforsikring handler om dine ejendele, blandt andet i forbindelse med tyveri og skader.' },
  { title: 'Ulykkesforsikring', icon: 'heart', text: 'Et uheld kan få betydning for din hverdag. Ulykkesforsikring kan give økonomisk hjælp ved varige mén efter en ulykke.' },
  { title: 'Sundhedsforsikring', icon: 'health', text: 'Sundhedsforsikring kan give adgang til undersøgelse og behandling. Mulighederne afhænger af den forsikring og de vilkår, du har.' },
];

export const pages = {
  home: {
    slug: '',
    title: 'PR Tryghed – forsikringsrådgivning med dig i centrum',
    description: 'Tag en snak med PR Tryghed om dine forsikringer. Læs om rådgivning, forsikringsområder og ejerskifte, eller kontakt os på 32 26 58 30.',
  },
  overview: {
    slug: 'forsikringsraadgivning',
    label: 'Forsikringsrådgivning',
    title: 'Forsikringsrådgivning | PR Tryghed',
    description: 'Find vej til rådgivning og forsikringsområder hos PR Tryghed. Kontakt os med dine spørgsmål om forsikring.',
    eyebrow: 'Et sted at starte',
    heading: 'Dine forsikringer.\nDit overblik.',
    intro: 'Hvad vil du gerne være klogere på? Find det område, der passer til dine spørgsmål, og lad os tage samtalen derfra.',
    photo: 'meeting',
  },
  advice: {
    slug: services[0].slug,
    label: services[0].title,
    title: 'Rådgivning om forsikring | PR Tryghed',
    description: 'Få overblik over dine spørgsmål om forsikring. Tag en samtale med PR Tryghed med udgangspunkt i din hverdag og dine ønsker.',
    eyebrow: 'Rådgivning',
    heading: 'En god samtale\nstarter med dig.',
    intro: 'Dine spørgsmål er et godt sted at begynde. Hvad fylder i din hverdag, og hvad vil du gerne vide om dine forsikringer?',
    photo: 'meeting',
    sections: [
      { heading: 'Rådgivning med udgangspunkt i dig', text: 'Forsikringer er personlige. Det, der giver mening for én, passer ikke nødvendigvis til en anden. Derfor begynder en god samtale med din situation, dine ønsker og det, du gerne vil have et bedre overblik over.' },
      { heading: 'Gør plads til dine spørgsmål', text: 'Hvad betyder selvrisiko? Hvilke forsikringer har du allerede? Og er der noget, du bør se nærmere på, når din hverdag ændrer sig? Du behøver ikke kende forsikringssproget for at tage den første snak.' },
    ],
  },
  insurance: {
    slug: services[1].slug,
    label: services[1].title,
    title: 'Forsikringsområder | PR Tryghed',
    description: 'Få et overblik over hus-, bil-, indbo-, ulykkes- og sundhedsforsikring. Tal med PR Tryghed om dine spørgsmål.',
    eyebrow: 'Forsikring',
    heading: 'Plads til alt det,\nder betyder noget.',
    intro: 'Fra dit hjem til din hverdag. Få et første overblik over de forskellige forsikringsområder, og find de spørgsmål, der er relevante for dig.',
    photo: 'everyday',
    notice: 'Dækning, undtagelser og selvrisiko afhænger af den enkelte forsikring. Se altid dine konkrete forsikringsvilkår.',
  },
  ownership: {
    slug: 'ejerskifte',
    label: 'Ejerskifte',
    title: 'Ejerskifte | PR Tryghed',
    description: 'Et nyt hjem giver nye spørgsmål. Tal med PR Tryghed om dine overvejelser om forsikring i forbindelse med ejerskifte.',
    eyebrow: 'Ejerskifte',
    heading: 'Et nyt hjem.\nNye spørgsmål.',
    intro: 'Når nøglerne skifter hænder, er der meget at forholde sig til. Giv også dine spørgsmål om forsikring en plads i overvejelserne.',
    photo: 'everyday',
    sections: [
      { heading: 'Tag spørgsmålene med fra starten', text: 'Hvilke forsikringer har du i dag, og hvad ændrer sig, når du flytter? Skriv dine spørgsmål ned, og saml de dokumenter, du gerne vil tale om. Det gør det lettere at få en konkret samtale om dit kommende hjem.' },
      { heading: 'En samtale om dit næste hjem', text: 'Måske er du ved at købe bolig. Måske vil du bare forstå, hvilke forsikringsspørgsmål et ejerskifte rejser. Kontakt PR Tryghed og fortæl om din situation, så vi kan tale om dit næste skridt.' },
    ],
  },
  about: {
    slug: 'om-os',
    label: 'Om os',
    title: 'Om PR Tryghed',
    description: 'PR Tryghed er et sted at starte din samtale om forsikring. Kontakt os på 32 26 58 30 eller info@prtryghed.dk.',
    eyebrow: 'Om PR Tryghed',
    heading: 'Mennesker først.\nForsikringer derfra.',
    intro: 'Forsikringer handler i sidste ende om hverdagen og det, der betyder noget for dig. Det er udgangspunktet for en samtale med PR Tryghed.',
    photo: 'welcome',
    sections: [
      { heading: 'Tryghed begynder med forståelse', text: 'Det er lettere at tage stilling, når du ved, hvad du skal spørge om. Hos PR Tryghed er der plads til at tale om både de små detaljer og de store overvejelser, der følger med dine forsikringer.' },
      { heading: 'Lad os lære hinanden at kende', text: 'Du behøver ikke have en færdig plan, før du tager kontakt. Fortæl os, hvad der fylder, og hvad du gerne vil vide mere om. Den første samtale kan starte med et enkelt spørgsmål.' },
    ],
  },
  contact: {
    slug: 'kontakt',
    label: 'Bliv kontaktet',
    title: 'Kontakt PR Tryghed',
    description: 'Ring til PR Tryghed på 32 26 58 30, skriv til info@prtryghed.dk, eller klargør en e-mail med dine spørgsmål.',
  },
  booking: {
    slug: 'book-moede',
    label: 'Book møde',
    title: 'Aftal et møde | PR Tryghed',
    description: 'Kontakt PR Tryghed for at aftale et møde om dine forsikringer. Ring på 32 26 58 30 eller skriv til info@prtryghed.dk.',
  },
};

export const navigation = [pages.overview, pages.ownership, pages.about];

export const homeCopy = {
  eyebrow: 'PR Tryghed · Forsikringsrådgivning',
  heading: 'Tryghed starter\nmed et godt\noverblik.',
  intro: 'Livet er fuldt af det, der betyder noget. Lad os tage en snak om dine forsikringer – med udgangspunkt i dig og din hverdag.',
  servicesHeading: 'Hvad har du brug for?',
  servicesIntro: 'Der er flere veje til overblik. Find dit sted at starte.',
  storyEyebrow: 'Det handler om din hverdag',
  storyHeading: 'Forsikringer skal\ngive mening.\nOgså for dig.',
  storyText: 'Hjemmet. Familien. Alt det, du gerne vil passe på. Når du ser på dine forsikringer, er det et godt sted at begynde.',
  storyDetail: 'Måske står du foran en forandring. Måske ønsker du bare at forstå dine muligheder bedre. Tag dine spørgsmål med til en samtale med PR Tryghed.',
};

export const steps = [
  { title: 'Hvad er vigtigt for dig?', text: 'Tænk over din hverdag og de spørgsmål, du gerne vil have vendt.' },
  { title: 'Lad os tage en snak', text: 'Kontakt os, og fortæl, hvad du ønsker at få et bedre overblik over.' },
  { title: 'Find dit næste skridt', text: 'Spørg ind til mulighederne, og hvad et eventuelt forløb vil indebære.' },
];
