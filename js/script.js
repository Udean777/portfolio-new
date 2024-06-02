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
