const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
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
    "projects.heading": "My <span class=\"highlight\">Projects</span>",
    "projects.this_web.title": "This Website:",
    "projects.this_web.desc": "I created this website as my digital business card and a place where I can showcase my work in one spot. I built the entire website from scratch with light use of AI. During development, I focused on a modern, minimalistic design, intuitive navigation, and speed. The website is fully responsive, so it seamlessly adapts to both large monitors and mobile phone screens. It also serves as a space where I test new web technologies and techniques in practice.",
    "projects.tag.responsive": "Responsive",
    "projects.view_code": "GitHub Repository",
    "contact.heading": "Get in <span class=\"highlight\">Touch</span>",
    "contact.intro": "Feel free to reach out to me for collaborations, questions, or just a friendly chat! I'm always open to discussing new projects and ideas.",
    "contact.email": "Email",
    "contact.instagram": "Instagram",
    "contact.github": "GitHub",
    "footer.rights": "All rights reserved.",
    "footer.validator": "W3C HTML Validator"
  },
  cs: {
    "nav.home": "Domů",
    "nav.about": "O mně",
    "nav.projects": "Projekty",
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
    "projects.heading": "Moje <span class=\"highlight\">projekty</span>",
    "projects.this_web.title": "Tento web:",
    "projects.this_web.desc": "Tuto stránku jsem vytvořil jako svou takovou moji vizitku a místo, kde můžu na jednom místě prezentovat svou práci. Celý web jsem postavil kompletně od základů s lehkým použitím AI. Při tvorbě jsem se zaměřil na moderní, minimalistický vzhled, přehlednou navigaci a rychlost. Web je plně responzivní, takže se plynule přizpůsobí jak velkému monitoru, tak displeji telefonu. Slouží mi zároveň jako prostor, kde si v praxi zkouším nové webové technologie a postupy.",
    "projects.tag.responsive": "Responzivní",
    "projects.view_code": "GitHub repozitář",
    "contact.heading": "Napište <span class=\"highlight\">mi</span>",
    "contact.intro": "Neváhejte mě kontaktovat pro spolupráci, dotazy nebo jen přátelské povídání! Vždy jsem otevřený diskusi o nových projektech a nápadech.",
    "contact.email": "E-mail",
    "contact.instagram": "Instagram",
    "contact.github": "GitHub",
    "footer.rights": "Všechna práva vyhrazena.",
    "footer.validator": "W3C HTML Validátor"
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
  projects: {
    en: "Projects - Dominik Šrámek",
    cs: "Projekty - Dominik Šrámek"
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
