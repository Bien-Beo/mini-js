const magnifierEl = document.querySelector(".magnifier");
const searchBarEl = document.querySelector(".search-bar-container");

magnifierEl.addEventListener("click", () => {
    searchBarEl.classList.toggle("active");
});
