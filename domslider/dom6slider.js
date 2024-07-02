let leftButton = document.querySelector(".slider .btLeft");
let rightButton = document.querySelector(".slider .btRight");
let container = document.querySelector(".slider > section");
let numberImages = document.querySelectorAll(".slider > section > img").length; // 8
// let widthImage = 1024;
// let widthImage = document.querySelectorAll(".slider > section > img")[0];
let widthImage = parseInt(window.getComputedStyle(document.querySelector(".slider > section > img")).getPropertyValue('width'));
let image = 1;
let position = 0;

rightButton.addEventListener("click", function () {
    if (image === numberImages) {
        image = 1;
        position = 0;
    } else {
        image++;
        position += widthImage;
    }
    container.scrollLeft = position;
})
leftButton.addEventListener("click", function () {
    if (image === 1) {
        image = numberImages;
        position = numberImages * widthImage - widthImage;
    } else {
        image--;
        position -= widthImage;
    }
    container.scrollLeft = position;
})