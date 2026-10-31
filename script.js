/**
 * Beyond fields – Czysty JavaScript (Vanilla JS dla GitHub Pages)
 * Organizator: Koło Naukowe Quanta (Uniwersytet Zielonogórski)
 */

// --- 1. DANE KONFERENCJI ---
const CONFERENCE_INFO = {
  title: 'Beyond fields',
  subtitle: 'Uczelniana Konferencja Studencka',
  tagline: 'project by Quanta science club',
  motto: 'Beyond limits',
  organizer: 'Koło Naukowe Quanta',
  date: 'Wtorek, 17 listopada 2026',
  hours: '08:30 – 17:30',
  buildingName: 'Budynek A-29 (Kampus A, Uniwersytet Zielonogórski)',
  floor: '1. piętro',
  room: 'sala 106',
  address: 'ul. prof. Zygmunta Szafrana 4a',
  city: 'Zielona Góra',
  contactEmail: 'kolo.quanta.uz@gmail.com',
  buildingImageSrc: './assets/aistudio/obraz_9eb1e4c2.png',
  fundingNotice: 'Zadanie finansowane z Środków Ministra Nauki i Szkolnictwa Wyższego umowa nr MNISW/2026/DAP/114',
};

// --- 2. DANE 13 PLAKATÓW PROMOCYJNYCH ---
const PROMO_POSTERS = [
  {
    id: 'poster-divided',
    code: 'PLAKAT #01 · GŁÓWNY',
    question: 'A co, jeśli świat nie jest podzielony tak, jak podzieliliśmy go my?',
    theme: 'Główny Plakat Konferencji',
    subtext: 'Idea przewodnia Beyond fields',
    description:
      'Główny motyw przewodni konferencji Beyond fields. Granice między dziedzinami wiedzy to wytwór człowieka — realne wyzwania współczesnego świata wymykają się tradycyjnym podziałom akademickim.',
    imageSrc: './assets/posters/poster_01.svg',
  },
  {
    id: 'poster-justice',
    code: 'PLAKAT #02',
    question: 'A jeśli obie strony mają rację?',
    theme: 'Prawo & Etyka',
    subtext: 'Dylematy polaryzacji i relatywizmu',
    description:
      'Gdy racje moralne, społeczne i prawne zderzają się ze sobą, tradycyjne zero-jedynkowe podziały zawodzą. Jak budować konsensus w spolaryzowanym świecie i czy kompromis to zawsze słuszny wybór?',
    imageSrc: './assets/posters/poster_02.svg',
  },
  {
    id: 'poster-sound',
    code: 'PLAKAT #03',
    question: 'Czy świat brzmiałby tak samo, gdyby nikt go nie słuchał?',
    theme: 'Filozofia Dźwięku & Komunikacja',
    subtext: 'O roli odbiorcy w tworzeniu znaczeń',
    description:
      'Czy prawda i zjawiska istnieją niezależnie od obserwatora? O znaczeniu obecności odbiorcy w nauce, kulturze i dialogu społecznym.',
    imageSrc: './assets/posters/poster_03.svg',
  },
  {
    id: 'poster-transhumanism',
    code: 'PLAKAT #04',
    question: 'Jeśli zmienimy wszystko, co tworzy człowieka, kto pozostanie?',
    theme: 'Tożsamość & Transhumanizm',
    subtext: 'Granice tożsamości biologicznej',
    description:
      'W dobie inżynierii biomedycznej, cybernetyki i neurointerfejsów zadajemy pytanie o to, co stanowi o niezmiennej esencji ludzkiego człowieczeństwa.',
    imageSrc: './assets/posters/poster_04.svg',
  },
  {
    id: 'poster-mechanism',
    code: 'PLAKAT #05',
    question: 'Czy mechanizm może działać, jeśli nie powinien istnieć?',
    theme: 'Etyka Maszyn & Determinizm',
    subtext: 'Złożoność systemów autonomicznych',
    description:
      'Rozwój mechanizmów technologicznych i struktur algorytmicznych, które raz uruchomione, zaczynają funkcjonować wbrew intencjom ich twórców.',
    imageSrc: './assets/posters/poster_05.svg',
  },
  {
    id: 'poster-ethics',
    code: 'PLAKAT #06',
    question: 'Czy jeśli coś jest możliwe technicznie, to znaczy, że powinniśmy to zrobić?',
    theme: 'Odpowiedzialność Nauki & Bioetyka',
    subtext: 'Granice rozwoju i powściągliwości',
    description:
      'Rozdźwięk między technologicznymi możliwościami a dojrzałością etyczną. Czy każda granica poznawcza musi zostać przekroczona?',
    imageSrc: './assets/posters/poster_06.svg',
  },
  {
    id: 'poster-nothing',
    code: 'PLAKAT #07',
    question: 'Co istnieje, kiedy nie ma nic?',
    theme: 'Ontologia & Fizyka Kwantowa',
    subtext: 'Pytanie o nicość i strukturę bytu',
    description:
      'Filozoficzne i fizyczne dociekanie granic nicości. Co kryje się w próżni i jak ludzki umysł radzi sobie z pojęciem braku bytu?',
    imageSrc: './assets/posters/poster_07.svg',
  },
  {
    id: 'poster-climate',
    code: 'PLAKAT #08',
    question: 'Po czym poznamy, że jest już za późno?',
    theme: 'Ekologia & Przyszłość Cywilizacji',
    subtext: 'Punkty krytyczne biosfery',
    description:
      'O progach krytycznych środowiska, nieodwracalności zmian klimatycznych oraz odpowiedzialności współczesnej nauki za przyszłość planety.',
    imageSrc: './assets/posters/poster_08.svg',
  },
  {
    id: 'poster-words',
    code: 'PLAKAT #09',
    question: 'Co pozostaje z człowieka, gdy znikają jego słowa?',
    theme: 'Język & Neurokognitywistyka',
    subtext: 'Relacja myśli, mowy i pamięci',
    description:
      'Rola języka w konstruowaniu ludzkiej tożsamości. Co dzieje się z naszym myśleniem, gdy tracimy zdolność werbalizowania doświadczeń?',
    imageSrc: './assets/posters/poster_09.svg',
  },
  {
    id: 'poster-puzzle',
    code: 'PLAKAT #10',
    question: 'Jak możemy żyć w tym samym świecie i widzieć go inaczej?',
    theme: 'Socjologia & Percepcja Rzeczywistości',
    subtext: 'Układanka perspektyw i bańki poznawcze',
    description:
      'Zamknięci w odmiennych ramach pojęciowych patrzymy na te same fakty i wyciągamy odmienne wnioski. Jak składać puzzle porozumienia społecznego?',
    imageSrc: './assets/posters/poster_10.svg',
  },
  {
    id: 'poster-money',
    code: 'PLAKAT #11',
    question: 'Pieniądze mierzą wartość. Ale czy mierzą wszystko?',
    theme: 'Ekonomia Społeczna & Aksjologia',
    subtext: 'Wycena kapitału a wartości niematerialne',
    description:
      'Czy rynkowe wyceny oddają pełnię ludzkiego doświadczenia? O poszukiwaniu miar dla dobrostanu, relacji i czystej wiedzy naukowej.',
    imageSrc: './assets/posters/poster_11.svg',
  },
  {
    id: 'poster-stairs',
    code: 'PLAKAT #12',
    question: 'Czy możesz ufać temu co widzisz?',
    theme: 'Kognitywistyka & Architektura Zmysłów',
    subtext: 'Złudzenia percepcyjne i prawda empiryczna',
    description:
      'Architektura ludzkiego umysłu jest podatna na złudzenia równie łatwo, jak na zmanipulowane algorytmicznie bodźce. Gdzie leży granica między zmysłami a symulacją?',
    imageSrc: './assets/posters/poster_12.svg',
  },
  {
    id: 'poster-chaos',
    code: 'PLAKAT #13',
    question: 'A jeśli to, co nazywamy chaosem, jest początkiem kreacji?',
    theme: 'Teoria Chaosu & Kreatywność',
    subtext: 'Porządek ukryty w nieuporządkowaniu',
    description:
      'O zjawiskach złożonych i pozornej przypadkowości, które w rzeczywistości stanowią zalążek nowych teorii, form artystycznych i rewolucji naukowych.',
    imageSrc: './assets/posters/poster_13.svg',
  },
];

// --- 3. DANE HARMONOGRAMU (13 PUNKTÓW) ---
const SCHEDULE_ONE_DAY = [
  {
    id: 'sch-01',
    time: '08:30 – 09:00',
    duration: '30 min',
    title: 'Rejestracja uczestników',
    type: 'registration',
    details: '—',
    highlight: false,
  },
  {
    id: 'sch-02',
    time: '09:00 – 09:25',
    duration: '25 min',
    title: 'Uroczysta inauguracja',
    type: 'keynote',
    details: '—',
    highlight: true,
  },
  {
    id: 'sch-03',
    time: '09:25 – 10:00',
    duration: '35 min',
    title: 'I blok referatowy',
    type: 'session',
    details: '2 referaty',
    highlight: false,
  },
  {
    id: 'sch-04',
    time: '10:00 – 10:15',
    duration: '15 min',
    title: 'Przerwa',
    type: 'break',
    details: '—',
    highlight: false,
  },
  {
    id: 'sch-05',
    time: '10:15 – 11:15',
    duration: '60 min',
    title: 'II blok referatowy',
    type: 'session',
    details: '4 referaty',
    highlight: false,
  },
  {
    id: 'sch-06',
    time: '11:15 – 11:30',
    duration: '15 min',
    title: 'Przerwa',
    type: 'break',
    details: '—',
    highlight: false,
  },
  {
    id: 'sch-07',
    time: '11:30 – 12:30',
    duration: '60 min',
    title: 'III blok referatowy',
    type: 'session',
    details: '4 referaty',
    highlight: false,
  },
  {
    id: 'sch-08',
    time: '12:30 – 14:00',
    duration: '90 min',
    title: 'Pokazy kół naukowych na stanowiskach oraz obiad',
    type: 'expo',
    details: '—',
    highlight: true,
  },
  {
    id: 'sch-09',
    time: '14:00 – 15:00',
    duration: '60 min',
    title: 'IV blok referatowy',
    type: 'session',
    details: '3 referaty',
    highlight: false,
  },
  {
    id: 'sch-10',
    time: '15:00 – 15:15',
    duration: '15 min',
    title: 'Przerwa',
    type: 'break',
    details: '—',
    highlight: false,
  },
  {
    id: 'sch-11',
    time: '15:15 – 16:15',
    duration: '60 min',
    title: 'V blok referatowy',
    type: 'session',
    details: '3 referaty',
    highlight: false,
  },
  {
    id: 'sch-12',
    time: '16:15 – 16:30',
    duration: '15 min',
    title: 'Przerwa',
    type: 'break',
    details: '—',
    highlight: false,
  },
  {
    id: 'sch-13',
    time: '16:30 – 17:30',
    duration: '60 min',
    title: 'VI blok referatowy',
    type: 'session',
    details: '4 referaty',
    highlight: true,
  },
];

// --- 4. FORMULARZE GOOGLE FORMS ---
const GOOGLE_FORMS = {
  attendee: {
    name: 'Uczestnik konferencji',
    badge: 'Dla uczestników',
    description: 'Zgłoszenie udziału w wykładach i panelach w sali 106 (Budynek A-29, Kampus A UZ).',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdqJ8D9NkohwtImvwpMx22R9me1j6E802GXwBSuQvHMwKiStg/viewform?embedded=true',
    directLinkUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdqJ8D9NkohwtImvwpMx22R9me1j6E802GXwBSuQvHMwKiStg/viewform?usp=dialog',
    height: '1380',
    linkText: 'Zarejestruj się przez bezpośredni link',
  },
  club: {
    name: 'Koło naukowe',
    badge: 'Dla kół naukowych',
    description: 'Formularz rejestracyjny dla kół naukowych chcących wystawić stanowisko na korytarzu 1. piętra.',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdJ9J50UaGpwzuq2qkUcSY-y5Xyl8FEmj0Gyw1Gf2T9QXL_PQ/viewform?embedded=true',
    directLinkUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdJ9J50UaGpwzuq2qkUcSY-y5Xyl8FEmj0Gyw1Gf2T9QXL_PQ/viewform?usp=dialog',
    height: '1006',
    linkText: 'Zarejestruj koło przez bezpośredni link',
  },
};

// --- STAN APLIKACJI ---
let currentPosterIndex = 0;
let currentScheduleFilter = 'all';
let currentFormTab = 'attendee';

// --- INICJALIZACJA PO ZAŁADOWANIU DOM ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPosterShowcase();
  initSchedule();
  initGoogleForms();
  initContactCopy();
  initHeroQuestionLinks();
});

// --- NAVBAR & MOBILE MENU ---
function initNavbar() {
  const navbar = document.getElementById('navbar-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  // Scroll listener for sticky navbar blur
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('bg-neutral-950/90', 'backdrop-blur-md', 'border-neutral-800/80', 'shadow-lg', 'shadow-black/40');
      navbar.classList.remove('bg-transparent', 'border-transparent');
    } else {
      navbar.classList.remove('bg-neutral-950/90', 'backdrop-blur-md', 'border-neutral-800/80', 'shadow-lg', 'shadow-black/40');
      navbar.classList.add('bg-transparent', 'border-transparent');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIconOpen.classList.add('hidden');
        menuIconClose.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      }
    });

    // Close menu when clicking any mobile link
    mobileMenu.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }
}

// --- POKAZ PLAKATÓW (SLIDER & LIGHTBOX) ---
function initPosterShowcase() {
  const track = document.getElementById('poster-track');
  const prevBtn = document.getElementById('poster-prev-btn');
  const nextBtn = document.getElementById('poster-next-btn');
  const scrollLeftBtn = document.getElementById('track-scroll-left');
  const scrollRightBtn = document.getElementById('track-scroll-right');
  const lightbox = document.getElementById('poster-lightbox');
  const lightboxOpenTriggers = document.querySelectorAll('.lightbox-trigger');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');

  // Render Thumbnails
  track.innerHTML = '';
  PROMO_POSTERS.forEach((poster, idx) => {
    const isMain = idx === 0;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `poster-thumb-item group relative flex-none w-40 sm:w-48 rounded-2xl p-2.5 text-left transition-all duration-300 border cursor-pointer ${
      idx === 0
        ? 'bg-neutral-900 border-red-500 shadow-xl shadow-red-950/30 ring-2 ring-red-500/30 scale-[1.02]'
        : 'bg-neutral-950/70 border-neutral-800/90 hover:border-neutral-700 hover:bg-neutral-900/60 opacity-80 hover:opacity-100'
    }`;
    btn.style.scrollSnapAlign = 'start';
    btn.setAttribute('data-index', idx);
    btn.setAttribute('aria-label', `Wybierz ${poster.code}: ${poster.question}`);

    btn.innerHTML = `
      <div class="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center p-1.5">
        <img src="${poster.imageSrc}" alt="${poster.question}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        <div class="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider backdrop-blur-md ${
          isMain ? 'bg-red-600 text-white' : 'bg-neutral-950/80 text-neutral-300 border border-neutral-700/60'
        }">
          #${String(idx + 1).padStart(2, '0')}${isMain ? ' · GŁÓWNY' : ''}
        </div>
      </div>
      <div class="mt-2.5 px-1 space-y-1">
        <span class="block text-[11px] font-mono uppercase text-red-400 font-medium truncate">${poster.theme}</span>
        <p class="text-xs font-medium text-neutral-200 line-clamp-2 leading-snug group-hover:text-white transition-colors">${poster.question}</p>
      </div>
    `;

    btn.addEventListener('click', () => {
      selectPoster(idx);
    });

    track.appendChild(btn);
  });

  // Funkcja przewijająca dokładnie o jeden cały plakat
  function stepPoster(direction) {
    let nextIndex = currentPosterIndex + direction;
    if (nextIndex < 0) {
      nextIndex = PROMO_POSTERS.length - 1;
    } else if (nextIndex >= PROMO_POSTERS.length) {
      nextIndex = 0;
    }
    selectPoster(nextIndex, true);
  }

  // Przyciski nawigacji pod dużym plakatem
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stepPoster(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stepPoster(1);
    });
  }

  // Strzałki na karuzeli miniatur (przesuwanie o dokładnie 1 cały plakat)
  if (scrollLeftBtn && track) {
    scrollLeftBtn.addEventListener('click', () => {
      stepPoster(-1);
    });
  }

  if (scrollRightBtn && track) {
    scrollRightBtn.addEventListener('click', () => {
      stepPoster(1);
    });
  }

  // Nasłuchiwanie ręcznego przewijania karuzeli (np. dotykiem), aby synchronizować aktywny plakat
  let manualScrollTimeout = null;
  track.addEventListener(
    'scroll',
    () => {
      if (isProgrammaticTrackScroll) return;
      clearTimeout(manualScrollTimeout);
      manualScrollTimeout = setTimeout(() => {
        const thumbs = Array.from(track.querySelectorAll('.poster-thumb-item'));
        if (!thumbs.length) return;
        const currentScroll = track.scrollLeft;
        let closestIdx = 0;
        let minDiff = Infinity;
        thumbs.forEach((th, i) => {
          const diff = Math.abs(th.offsetLeft - currentScroll);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = i;
          }
        });
        if (closestIdx !== currentPosterIndex) {
          selectPoster(closestIdx, false);
        }
      }, 150);
    },
    { passive: true }
  );

  // Lightbox Triggers
  lightboxOpenTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      openLightbox();
    });
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const newIdx = currentPosterIndex === 0 ? PROMO_POSTERS.length - 1 : currentPosterIndex - 1;
      selectPoster(newIdx);
      updateLightboxContent();
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const newIdx = currentPosterIndex === PROMO_POSTERS.length - 1 ? 0 : currentPosterIndex + 1;
      selectPoster(newIdx);
      updateLightboxContent();
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        const newIdx = currentPosterIndex === 0 ? PROMO_POSTERS.length - 1 : currentPosterIndex - 1;
        selectPoster(newIdx);
        updateLightboxContent();
      }
      if (e.key === 'ArrowRight') {
        const newIdx = currentPosterIndex === PROMO_POSTERS.length - 1 ? 0 : currentPosterIndex + 1;
        selectPoster(newIdx);
        updateLightboxContent();
      }
    }
  });

  // Initial featured poster render
  updateFeaturedPoster();
}

let isProgrammaticTrackScroll = false;
let programmaticScrollTimer = null;

function selectPoster(index, shouldScrollTrack = true) {
  currentPosterIndex = index;
  updateFeaturedPoster();

  // Highlight active thumb
  const track = document.getElementById('poster-track');
  if (track) {
    const thumbs = track.querySelectorAll('.poster-thumb-item');
    thumbs.forEach((th, i) => {
      if (i === index) {
        th.className =
          'poster-thumb-item group relative flex-none w-40 sm:w-48 rounded-2xl p-2.5 text-left transition-all duration-300 border cursor-pointer bg-neutral-900 border-red-500 shadow-xl shadow-red-950/30 ring-2 ring-red-500/30 scale-[1.02]';
      } else {
        th.className =
          'poster-thumb-item group relative flex-none w-40 sm:w-48 rounded-2xl p-2.5 text-left transition-all duration-300 border cursor-pointer bg-neutral-950/70 border-neutral-800/90 hover:border-neutral-700 hover:bg-neutral-900/60 opacity-80 hover:opacity-100';
      }
    });

    // Przesuń karuzelę o cały plakat, tak by wybrany plakat był w całości widoczny od początku (bez ucinania na pół)
    if (shouldScrollTrack) {
      const activeThumb = thumbs[index];
      if (activeThumb) {
        isProgrammaticTrackScroll = true;
        track.scrollTo({ left: activeThumb.offsetLeft, behavior: 'smooth' });
        clearTimeout(programmaticScrollTimer);
        programmaticScrollTimer = setTimeout(() => {
          isProgrammaticTrackScroll = false;
        }, 500);
      }
    }
  }

  // Update Hero question button active indicators
  updateHeroQuestionsHighlight();
}

function updateFeaturedPoster() {
  const poster = PROMO_POSTERS[currentPosterIndex];
  const isMain = currentPosterIndex === 0;

  const imgEl = document.getElementById('featured-poster-img');
  const badgeEl = document.getElementById('featured-poster-badge');
  const themeEl = document.getElementById('featured-poster-theme');
  const subtextEl = document.getElementById('featured-poster-subtext');
  const questionEl = document.getElementById('featured-poster-question');
  const descEl = document.getElementById('featured-poster-desc');
  const downloadLink = document.getElementById('featured-poster-download');
  const indexEl = document.getElementById('poster-index-indicator');
  const trackCounter = document.getElementById('track-counter');

  if (imgEl) {
    imgEl.src = poster.imageSrc;
    imgEl.alt = poster.question;
  }
  if (badgeEl) {
    badgeEl.textContent = isMain ? '★ GŁÓWNY PLAKAT KONFERENCJI' : poster.code;
    badgeEl.className = isMain
      ? 'px-3 py-1 rounded-md text-xs font-mono font-medium backdrop-blur-md border bg-red-600/90 border-red-500 text-white shadow-lg shadow-red-950/50'
      : 'px-3 py-1 rounded-md text-xs font-mono font-medium backdrop-blur-md border bg-neutral-950/85 border-neutral-700/80 text-neutral-300';
  }
  if (themeEl) themeEl.textContent = poster.theme;
  if (subtextEl) subtextEl.textContent = poster.subtext;
  if (questionEl) questionEl.textContent = `„${poster.question}”`;
  if (descEl) descEl.textContent = poster.description;
  if (downloadLink) {
    downloadLink.href = poster.imageSrc;
    downloadLink.setAttribute('download', `beyond-fields-${poster.id}.svg`);
  }
  if (indexEl) {
    indexEl.innerHTML = `Plakat <strong class="text-white">${String(currentPosterIndex + 1).padStart(2, '0')}</strong> z ${String(PROMO_POSTERS.length).padStart(2, '0')}`;
  }
  if (trackCounter) {
    trackCounter.textContent = `Plakat ${currentPosterIndex + 1} z ${PROMO_POSTERS.length}`;
  }
}

function openLightbox() {
  const lightbox = document.getElementById('poster-lightbox');
  if (lightbox) {
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    updateLightboxContent();
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('poster-lightbox');
  if (lightbox) {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function updateLightboxContent() {
  const poster = PROMO_POSTERS[currentPosterIndex];
  const isMain = currentPosterIndex === 0;

  const lbBadge = document.getElementById('lb-poster-badge');
  const lbTitle = document.getElementById('lb-poster-title');
  const lbImg = document.getElementById('lb-poster-img');
  const lbDownload = document.getElementById('lb-poster-download');
  const lbFooter = document.getElementById('lb-poster-footer');

  if (lbBadge) {
    lbBadge.textContent = isMain ? 'PLAKAT #01 · GŁÓWNY' : poster.code;
    lbBadge.className = isMain
      ? 'font-mono text-xs sm:text-sm font-semibold px-2.5 py-1 rounded bg-red-600 text-white'
      : 'font-mono text-xs sm:text-sm font-semibold px-2.5 py-1 rounded bg-neutral-900 border border-neutral-700 text-red-400';
  }
  if (lbTitle) lbTitle.textContent = poster.question;
  if (lbImg) {
    lbImg.src = poster.imageSrc;
    lbImg.alt = poster.question;
  }
  if (lbDownload) {
    lbDownload.href = poster.imageSrc;
    lbDownload.setAttribute('download', `beyond-fields-${poster.id}.svg`);
  }
  if (lbFooter) {
    lbFooter.textContent = `${poster.theme} · ${currentPosterIndex + 1} z ${PROMO_POSTERS.length}`;
  }
}

// --- HARMONOGRAM & FILTRY ---
function initSchedule() {
  const timeline = document.getElementById('schedule-timeline');
  const filterAll = document.getElementById('filter-all');
  const filterSessions = document.getElementById('filter-sessions');
  const filterBreaks = document.getElementById('filter-breaks');

  const sessionsCount = SCHEDULE_ONE_DAY.filter(
    (item) => item.type === 'keynote' || item.type === 'session' || item.type === 'panel'
  ).length;

  const breaksCount = SCHEDULE_ONE_DAY.filter(
    (item) => item.type === 'break' || item.type === 'registration' || item.type === 'expo'
  ).length;

  if (filterAll) filterAll.textContent = `Pełny program (${SCHEDULE_ONE_DAY.length})`;
  if (filterSessions) filterSessions.textContent = `Bloki referatowe (${sessionsCount})`;
  if (filterBreaks) filterBreaks.textContent = `Przerwy & Wydarzenia (${breaksCount})`;

  const setFilter = (filter) => {
    currentScheduleFilter = filter;
    [filterAll, filterSessions, filterBreaks].forEach((btn) => {
      btn.className = 'px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-neutral-400 hover:text-neutral-200';
    });
    if (filter === 'all' && filterAll) filterAll.className = 'px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer bg-neutral-800 text-white shadow-sm';
    if (filter === 'sessions' && filterSessions) filterSessions.className = 'px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer bg-neutral-800 text-white shadow-sm';
    if (filter === 'breaks' && filterBreaks) filterBreaks.className = 'px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer bg-neutral-800 text-white shadow-sm';
    renderSchedule();
  };

  if (filterAll) filterAll.addEventListener('click', () => setFilter('all'));
  if (filterSessions) filterSessions.addEventListener('click', () => setFilter('sessions'));
  if (filterBreaks) filterBreaks.addEventListener('click', () => setFilter('breaks'));

  renderSchedule();
}

function renderSchedule() {
  const timeline = document.getElementById('schedule-timeline');
  if (!timeline) return;

  const filtered = SCHEDULE_ONE_DAY.filter((item) => {
    if (currentScheduleFilter === 'sessions') return item.type === 'keynote' || item.type === 'session' || item.type === 'panel';
    if (currentScheduleFilter === 'breaks') return item.type === 'break' || item.type === 'registration' || item.type === 'expo';
    return true;
  });

  timeline.innerHTML = '';
  filtered.forEach((item) => {
    const isBreak = item.type === 'break' || item.type === 'registration';
    const isExpo = item.type === 'expo';
    const isKeynote = item.type === 'keynote';
    const isSession = item.type === 'session';

    const card = document.createElement('div');
    card.className = `rounded-2xl border transition-all duration-200 overflow-hidden ${
      isBreak
        ? 'bg-neutral-900/40 border-neutral-800/60'
        : isKeynote || isExpo
        ? 'bg-neutral-900/80 border-neutral-700/80 shadow-lg'
        : 'bg-neutral-900/60 border-neutral-800'
    }`;

    let tagHtml = '';
    if (isKeynote) {
      tagHtml = `<span class="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-red-950/80 text-red-400 border border-red-900/50 rounded">
        <svg class="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
        <span>Inauguracja</span>
      </span>`;
    } else if (isSession) {
      tagHtml = `<span class="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-neutral-800 text-neutral-300 border border-neutral-700/80 rounded">
        <svg class="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
        <span>Sesja naukowa</span>
      </span>`;
    } else if (isExpo) {
      tagHtml = `<span class="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-red-950/60 text-red-300 border border-red-800/60 rounded">
        <svg class="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <span>Pokazy kół & Obiad</span>
      </span>`;
    } else if (isBreak && item.type === 'break') {
      tagHtml = `<span class="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-neutral-800 text-neutral-400 border border-neutral-700 rounded">
        <svg class="w-3 h-3 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
        <span>Przerwa kawowa</span>
      </span>`;
    } else if (item.type === 'registration') {
      tagHtml = `<span class="inline-flex items-center text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-neutral-800 text-neutral-400 border border-neutral-700 rounded">Rejestracja</span>`;
    }

    const detailsBadge =
      item.details && item.details !== '—'
        ? `<div class="shrink-0 self-start sm:self-center pl-0 sm:pl-4">
             <span class="inline-flex items-center text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-neutral-800/90 text-neutral-200 border border-neutral-700/80">
               ${item.details}
             </span>
           </div>`
        : '';

    card.innerHTML = `
      <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-start sm:items-center gap-4">
          <div class="flex flex-col shrink-0 min-w-[130px]">
            <div class="flex items-center gap-1.5 text-sm font-mono font-semibold text-white">
              <svg class="w-3.5 h-3.5 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>${item.time}</span>
            </div>
            <span class="text-[11px] font-mono text-neutral-400 mt-0.5">Czas trwania: ${item.duration}</span>
          </div>
          <div class="hidden sm:block w-px self-stretch bg-neutral-800 my-0.5"></div>
          <div class="space-y-1">
            <div>${tagHtml}</div>
            <h3 class="text-base sm:text-lg font-heading font-semibold text-balance ${isKeynote || isExpo ? 'text-white' : 'text-neutral-200'}">
              ${item.title}
            </h3>
          </div>
        </div>
        ${detailsBadge}
      </div>
    `;

    timeline.appendChild(card);
  });
}

// --- GOOGLE FORMS TAB SWITCHER ---
function initGoogleForms() {
  const tabAttendee = document.getElementById('form-tab-attendee');
  const tabClub = document.getElementById('form-tab-club');
  const formIframe = document.getElementById('google-form-iframe');
  const formTitle = document.getElementById('form-header-title');
  const formDesc = document.getElementById('form-header-desc');
  const formBadge = document.getElementById('form-header-badge');
  const directLink = document.getElementById('form-direct-link');
  const directLinkSpan = document.getElementById('form-direct-link-text');

  const updateFormView = (type) => {
    currentFormTab = type;
    const form = GOOGLE_FORMS[type];

    if (type === 'attendee') {
      tabAttendee.className = 'py-3.5 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex items-center gap-3.5 bg-neutral-800 text-white shadow-md border border-neutral-700/80 ring-1 ring-red-500/30';
      tabClub.className = 'py-3.5 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex items-center gap-3.5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40';
      tabAttendee.querySelector('.tab-icon-box').className = 'tab-icon-box w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-red-600 text-white';
      tabClub.querySelector('.tab-icon-box').className = 'tab-icon-box w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-neutral-800 text-neutral-400';
    } else {
      tabClub.className = 'py-3.5 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex items-center gap-3.5 bg-neutral-800 text-white shadow-md border border-neutral-700/80 ring-1 ring-red-500/30';
      tabAttendee.className = 'py-3.5 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex items-center gap-3.5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40';
      tabClub.querySelector('.tab-icon-box').className = 'tab-icon-box w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-red-600 text-white';
      tabAttendee.querySelector('.tab-icon-box').className = 'tab-icon-box w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-neutral-800 text-neutral-400';
    }

    if (formIframe) {
      formIframe.src = form.embedUrl;
      formIframe.height = form.height;
      formIframe.title = `Formularz rejestracji - ${form.name}`;
    }
    if (formTitle) formTitle.textContent = form.name;
    if (formDesc) formDesc.textContent = form.description;
    if (formBadge) formBadge.textContent = form.badge;
    if (directLink) directLink.href = form.directLinkUrl;
    if (directLinkSpan) directLinkSpan.textContent = form.linkText;
  };

  if (tabAttendee) tabAttendee.addEventListener('click', () => updateFormView('attendee'));
  if (tabClub) tabClub.addEventListener('click', () => updateFormView('club'));
}

// --- KOPIOWANIE DANYCH KONTAKTOWYCH (EMAIL) ---
function initContactCopy() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyEmailText = document.getElementById('copy-email-text');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(CONFERENCE_INFO.contactEmail).then(() => {
        copyEmailBtn.classList.add('bg-neutral-700', 'text-green-400', 'border-green-600/50');
        if (copyEmailText) copyEmailText.textContent = 'Skopiowano adres!';
        const originalHtml = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
          <svg class="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span id="copy-email-text">Skopiowano adres!</span>
        `;
        setTimeout(() => {
          copyEmailBtn.classList.remove('bg-neutral-700', 'text-green-400', 'border-green-600/50');
          copyEmailBtn.innerHTML = `
            <svg class="w-4 h-4 text-neutral-400 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            <span id="copy-email-text">Skopiuj adres</span>
          `;
        }, 2200);
      });
    });
  }
}

// --- HERO QUESTION BUTTONS LINKUJĄCE DO PLAKATÓW ---
function initHeroQuestionLinks() {
  const heroButtons = document.querySelectorAll('[data-hero-poster-idx]');
  heroButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-hero-poster-idx'), 10);
      selectPoster(idx, true);

      // Płynne przewinięcie ekranu bezpośrednio do widoku tego plakatu
      const posterCard = document.getElementById('featured-poster-card') || document.getElementById('plakaty');
      if (posterCard) {
        posterCard.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const exploreAllBtn = document.getElementById('hero-explore-all-btn');
  if (exploreAllBtn) {
    exploreAllBtn.addEventListener('click', () => {
      // Płynne przewinięcie ekranu bezpośrednio na widok suwaka/karuzeli z plakatami
      const sliderView = document.getElementById('poster-gallery-slider') || document.getElementById('poster-track');
      if (sliderView) {
        sliderView.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  updateHeroQuestionsHighlight();
}

function updateHeroQuestionsHighlight() {
  const heroButtons = document.querySelectorAll('[data-hero-poster-idx]');
  heroButtons.forEach((btn) => {
    const idx = parseInt(btn.getAttribute('data-hero-poster-idx'), 10);
    const isSelected = currentPosterIndex === idx;

    if (idx === 0) {
      btn.className = `w-full text-xs sm:text-sm px-4 py-3 rounded-xl transition-all text-left flex items-center justify-between gap-3 cursor-pointer group shadow-lg ${
        isSelected
          ? 'bg-red-950/80 border-2 border-red-500 shadow-red-950/50 text-white ring-1 ring-red-500/40'
          : 'bg-red-950/40 hover:bg-red-950/70 border border-red-700/60 text-white'
      }`;
    } else {
      btn.className = `w-full text-xs sm:text-sm px-4 py-3 rounded-xl transition-all text-left flex items-center justify-between gap-3 cursor-pointer group ${
        isSelected
          ? 'bg-neutral-900 border-2 border-red-500 text-white shadow-lg shadow-red-950/40 ring-1 ring-red-500/30'
          : 'bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-800 hover:border-red-900/60 text-neutral-300 hover:text-white'
      }`;
    }
  });
}
