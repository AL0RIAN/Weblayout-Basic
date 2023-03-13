let burgerBtnOpen = document.querySelector(".burger")
let burgerMenu = document.querySelector(".burger-menu")
let burgerBtnExit = document.querySelector(".burger-nav__cross")

burgerBtnOpen.addEventListener("click", function() {
  burgerMenu.classList.add("burger-menu--active");
});

burgerBtnExit.addEventListener("click", function() {
  burgerMenu.classList.remove("burger-menu--active");
});
