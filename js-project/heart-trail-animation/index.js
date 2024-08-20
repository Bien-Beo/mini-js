const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const imgEl = document.createElement("img");

    imgEl.src = "./assets/img/2530804_general_heart_heart beat_heart disease_heart rate_icon.svg"
    imgEl.style.left = xPos + "px";
    imgEl.style.top = yPos + "px";

    const sizeImg = Math.random() * 100;
    imgEl.style.width = sizeImg + "px";
    imgEl.style.height = sizeImg + "px";
    
    bodyEl.append(imgEl);
    setTimeout(() => {
        imgEl.remove();
    }, 3000);
});