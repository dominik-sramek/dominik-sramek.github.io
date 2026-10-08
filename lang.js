const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.greeting": "Hello, world! I am",
    "hero.name": "Dominik Šrámek",
    "hero.title": "Creator, Maker & Developer",
    "about.heading": "About <span class=\"highlight\">Me</span>",
    "about.main_text": "Hi, I'm Dominik Šrámek. I'm passionate about technology and I love building things that have real-world use. Whether I'm currently writing code, printing on a 3D printer, or playing with hardware, I enjoy the process of turning an idea into something functional. On this portfolio website, I share the projects I'm currently working on and enjoying.",
    "about.prog.title": "Programming",
    "about.prog.text": "I focus on developing modern web applications and solving logical problems. I enjoy writing clean code and building things from the ground up.",
    "about.3d.title": "3D Printing",
    "about.3d.text": "I design, prototype, and print physical objects. 3D printing is a great way for me to turn digital ideas into reality.",
    "about.game.title": "PC Gaming",
    "about.game.text": "When I'm not working, I like to immerse myself in story-driven or competitive games. It's a great way for me to relax and at the same time observe game design.",
    "contact.heading": "Get in <span class=\"highlight\">Touch</span>",
    "contact.intro": "Feel free to reach out to me for collaborations, questions, or just a friendly chat! I'm always open to discussing new projects and ideas.",
    "contact.email": "Email",
    "contact.instagram": "Instagram",
    "contact.github": "GitHub"
  },
  cs: {
    "nav.home": "Domů",
    "nav.about": "O mně",
    "nav.contact": "Kontakt",
    "hero.greeting": "Ahoj světe! Jsem",
    "hero.name": "Dominik Šrámek",
    "hero.title": "Tvůrce, maker a vývojář",
    "about.heading": "O <span class=\"highlight\">mně</span>",
    "about.main_text": "Ahoj, jsem Dominik Šrámek. Baví mě technologie a rád stavím věci, které mají reálné využití. Ať už zrovna píšu kód, tisknu na 3D tiskárně, nebo si hraju s hardwarem, baví mě ten proces, kdy z nápadu vznikne něco funkčního. Na tomhle portfolio webu sdílím projekty, na kterých zrovna dělám a které mě baví.",
    "about.prog.title": "Programování",
    "about.prog.text": "Zaměřuju se na vývoj moderních webových aplikací a řešení logických problémů. Baví mě psát čistý kód a stavět věci od základu.",
    "about.3d.title": "3D tisk",
    "about.3d.text": "Navrhuju, prototypuju a tisknu fyzické objekty. 3D tisk je pro mě skvělá možnost, jak převést digitální nápady do reality.",
    "about.game.title": "PC hry",
    "about.game.text": "Když zrovna nepracuju, rád se ponořím do příběhových nebo kompetitivních her. Je to pro mě fajn způsob, jak si odpočinout a zároveň sledovat herní design.",
    "contact.heading": "Napište <span class=\"highlight\">mi</span>",
    "contact.intro": "Neváhejte mě kontaktovat pro spolupráci, dotazy nebo jen přátelské povídání! Vždy jsem otevřený diskusi o nových projektech a nápadech.",
    "contact.email": "E-mail",
    "contact.instagram": "Instagram",
    "contact.github": "GitHub"
  }
};

const pageTitles = {
  home: {
    en: "Dominik Šrámek - Portfolio",
    cs: "Dominik Šrámek - Portfolio"
  },
  about: {
    en: "About Me - Dominik Šrámek",
    cs: "O mně - Dominik Šrámek"
  },
  contact: {
    en: "Contact - Dominik Šrámek",
    cs: "Kontakt - Dominik Šrámek"
  }
};

function getFlagAsset(flag) {
  return flag === "cs" ? "flags/cz.svg" : "flags/gb.svg";
}

function getStoredLanguage() {
  return localStorage.getItem("siteLang") === "cs" ? "cs" : "en";
}

function setLanguage(lang) {
  const selectedLang = lang === "cs" ? "cs" : "en";
  const selectedTranslations = translations[selectedLang] || translations.en;
  const pageKey = document.body.dataset.page || "home";

  document.documentElement.lang = selectedLang;
  document.body.dataset.lang = selectedLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (selectedTranslations[key]) {
      element.innerHTML = selectedTranslations[key];
    }
  });

  const toggle = document.querySelector(".lang-toggle");
  if (toggle) {
    const isCzech = selectedLang === "cs";
    toggle.dataset.lang = selectedLang;
    toggle.innerHTML = `<img class="flag" src="${getFlagAsset(isCzech ? 'cs' : 'en')}?v=${Date.now()}" alt="${isCzech ? 'Czech flag' : 'United Kingdom flag'}">`;
    toggle.setAttribute("aria-label", isCzech ? "Přepnout do angličtiny" : "Přepnout do češtiny");
  }

  if (pageTitles[pageKey] && pageTitles[pageKey][selectedLang]) {
    document.title = pageTitles[pageKey][selectedLang];
  }

  localStorage.setItem("siteLang", selectedLang);
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".lang-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextLang = document.body.dataset.lang === "cs" ? "en" : "cs";
      setLanguage(nextLang);
    });
  }

  setLanguage(getStoredLanguage());
});
