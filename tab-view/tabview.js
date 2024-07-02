let elTabs = document.querySelectorAll("#tabslist a");
let elTabsContent = document.querySelectorAll("#tabsContent > section");

for (let i = 0; i < elTabs.length; i++) {
    elTabs[i].addEventListener("click", function () {
        for (let i = 0; i < elTabs.length; i++) {
            if (this === elTabs[i]) {
                // make the clicked tab the active tab
                this.classList.add("active");
                // show the corresponding content and hide the current one
                elTabsContent[i].classList.remove("hide");
            } else {
                // remove the formatting from the current active tab
                // if (elTabs[i].classList.has("active")) {
                elTabs[i].classList.remove("active");
                // }
                // Hide the previous content
                elTabsContent[i].classList.add("hide");
            }
        }
    })
}