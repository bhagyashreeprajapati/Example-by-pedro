let btCloseButton = document.querySelector(".closeButton");
let modalReference = document.querySelector(".modal");
let images = document.querySelectorAll(".gallery>img");

btCloseButton.addEventListener("click", function () {
    modalReference.style.display = "none";
});

for (let image of images) {
    image.addEventListener("click", function () {
        let imageSource = this.getAttribute("src");
        document.querySelector(".bigPicture").setAttribute("src", imageSource);
        document.querySelector(".title").textContent = this.getAttribute("title");
        modalReference.style.display = "flex";
    });
}