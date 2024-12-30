const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = "";
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(0, "0")}`

        
        // creating a new 'li' element and inserting it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `
            <div class="rect-box" style="background: ${randomHex}"></div>
            <span class="hex-value">${randomHex}</span>
        `
        // adding click event to current li element to conv the colon
        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color);
    }
}

generatePalette();

const copyColor = (el, hexVal) => {
    const colorBox = el.querySelector(".rect-box");
    navigator.clipboard.writeText(hexVal).then(() => {
        colorBox.innerHTML = `<span>Coped</span>`;
        setTimeout(() => colorBox.innerHTML = ``, 1000);
    })
}

refreshBtn.addEventListener("click", generatePalette)