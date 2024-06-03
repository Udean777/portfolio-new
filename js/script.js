function loadComponent(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("navbar", "./components/navbar.html");
loadComponent("footer", "./components/footer.html");
loadComponent("about", "/pages/about.html");
loadComponent("hero", "/pages/hero.html");
loadComponent("skill", "/pages/skills.html");
loadComponent("projects", "/pages/projects.html");

// Func back to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopButton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
