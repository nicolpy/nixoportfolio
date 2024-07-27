let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");

let activeNav = document.getElementById("active");

openMenu.addEventListener("click", () => {
  activeNav.style.display = "flex";
  if (activeNav.style.display === "flex") {
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
  }
});

closeMenu.addEventListener("click", () => {
  activeNav.style.display = "none";
  if (activeNav.style.display === "none") {
    openMenu.style.display = "flex";
    closeMenu.style.display = "none";
  }
});
