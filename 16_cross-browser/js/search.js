function searchOpen(search, block) {
  block.classList.add("search__block--active");
  search.classList.add("search--active")
}

function searchExit(search, block) {
  block.classList.remove("search__block--active");
  search.classList.remove("search--active")
}

let search = document.querySelector(".search");
let searchBtn = document.querySelector(".search__button");
let searchBlock = document.querySelector(".search__block");
let searchBlockClose = document.querySelector(".block__close");

searchBtn.addEventListener("click", func => searchOpen(search, searchBlock));
searchBlockClose.addEventListener("click", func => searchExit(search, searchBlock));
