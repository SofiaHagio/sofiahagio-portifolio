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

initActiveNav();