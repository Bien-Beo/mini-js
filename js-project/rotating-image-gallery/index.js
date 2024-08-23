const imgContainerEl = document.querySelector(".img-container");
const prevEl = document.getElementById("prev");
const nextvEl = document.getElementById("next");

let x = 0;
let timer;
prevEl.addEventListener("click", () => {
    x += 45;
    clearTimeout(timer);
    updateGallery();
})

nextvEl.addEventListener("click", () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
})

updateGallery();
function updateGallery() {
    imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 3000)
}