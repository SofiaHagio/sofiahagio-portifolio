document.documentElement.classList.add("js");

//mostra os elementos .reveal quando aparecem na tela
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

//destaca no menu a seção que está na tela
function initActiveNav() {
  const links = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("active", link.hash === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
}

//troca as categorias de habilidades
function initTabs() {
  const tabs = document.querySelectorAll(".skill-tab");
  const panels = document.querySelectorAll(".skill-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((panel) => (panel.hidden = true));

      tab.classList.add("active");
      document.getElementById(tab.dataset.panel).hidden = false;
    });
  });
}

initReveal();
initActiveNav();
initTabs();