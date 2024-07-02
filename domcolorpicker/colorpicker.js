let redSlider = document.getElementById("red");
let greenSlider = document.getElementById("green");
let blueSlider = document.getElementById("blue");

let red = 255;
let green = 255;
let blue = 255;

function updateColor() {
    // let red = redSlider.value;
    // let green = greenSlider.value;
    // let blue = blueSlider.value;

    let rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.querySelector("#chosenColor").textContent = rgbColor;
    colorDisplay.style.backgroundColor = rgbColor;
}

// document.querySelector("#red").addEventListener("change", updateColor);
document.querySelector("#red").addEventListener("change", function () {
    red = redSlider.value;
    updateColor();
});
// document.querySelector("#green").addEventListener("change", updateColor);
document.querySelector("#green").addEventListener("change", () => {
    green = greenSlider.value;
    updateColor()
});
// document.querySelector("#blue").addEventListener("change", updateColor);
document.querySelector("#blue").addEventListener("change", function () {
    blue = blueSlider.value;
    updateColor();
});