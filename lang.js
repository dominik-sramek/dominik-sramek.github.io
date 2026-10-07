const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.greeting": "Hello, world! I am",
    "hero.name": "Dominik Šrámek",
    "hero.title": "Creator, Maker & Developer",
    "home.intro": "Welcome to my personal portfolio. I'm passionate about technology, creating things from scratch, and exploring the endless possibilities of the digital and physical world.",
    "home.discover": "Discover more",
    "home.contact": "Get in Touch",
    "home.code.title": "💻 Code",
    "home.code.text": "Building modern web apps",
    "home.print.title": "🖨️ 3D Print",
    "home.print.text": "Prototyping physical ideas",
    "home.gaming.title": "🎮 Gaming",
    "home.gaming.text": "Exploring virtual worlds",
    "about.heading": "About <span class=\"highlight\">Me</span>",
    "about.intro": "I'm someone who loves the intersection of hardware, software, and entertainment. Here are the core things that drive my passion:",
    "about.card1.title": "3D Printing",
    "about.card1.text": "Fascinated by rapid prototyping. I love taking a digital concept and bringing it to life in the physical world.",
    "about.card2.title": "PC Gaming",
    "about.card2.text": "When I'm not creating, you can find me exploring immersive virtual worlds, enjoying stories, and competitive gaming.",
    "about.card3.title": "Programming",
    "about.card3.text": "I love writing code, solving complex logical problems, and building beautiful software solutions that make an impact.",
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
    "home.intro": "Vítejte v mém osobním portfoliu. Mám rád technologie, vytváření věcí od nuly a objevování nekonečných možností digitálního i fyzického světa.",
    "home.discover": "Zjistit více",
    "home.contact": "Kontaktujte mě",
    "home.code.title": "💻 Kód",
    "home.code.text": "Vytvářím moderní webové aplikace",
    "home.print.title": "🖨️ 3D tisk",
    "home.print.text": "Prototypování fyzických nápadů",
    "home.gaming.title": "🎮 Hry",
    "home.gaming.text": "Objevování virtuálních světů",
    "about.heading": "O <span class=\"highlight\">mně</span>",
    "about.intro": "Jsem člověk, který miluje průnik hardwaru, softwaru a zábavy. Tady jsou hlavní věci, které mě pohánějí:",
    "about.card1.title": "3D tisk",
    "about.card1.text": "Jsem fascinován rychlým prototypováním. Mám rád převádění digitálního konceptu do fyzické reality.",
    "about.card2.title": "PC hry",
    "about.card2.text": "Když nevytvářím, rád objevuje imerzivní virtuální světy, povídky a soutěžní hraní.",
    "about.card3.title": "Programování",
    "about.card3.text": "Mám rád psaní kódu, řešení složitých logických problémů a vytváření krásných softwarových řešení, která mají dopad.",
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
