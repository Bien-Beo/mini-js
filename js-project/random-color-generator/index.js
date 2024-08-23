const containerEl = document.querySelector(".container");

for (let idx = 0; idx < 30; idx++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();
function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = `#${newColorCode}`;
        colorContainerEl.innerText = `#${newColorCode}`;
    })
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "";
    for (let idx = 0; idx < colorCodeLength; idx++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNum, randomNum + 1);
    }
    return color;
}