let url = "http://localhost:3000/menu";
let urlCategories = "http://localhost:3000/categories";
let elMenu = document.querySelector("#menu");
let elFormFood = document.querySelector("#formFood");
let elBtSubmitFormFood = document.querySelector("#btSubmitFormFood");
let elListCategories = document.querySelector("#categoriesList");
let fName = document.querySelector("#name");
let fDescription = document.querySelector("#description");
let fPrice = document.querySelector("#price");
let fCategory = elListCategories;
let elBtUpdateButton = document.querySelector("#btUpdateFormFood");
let elBtCancelUpdate = document.querySelector("#btCancelUpdate");

let fItemId = document.querySelector("#itemId");

function fillSelectCategories(categories) {
    for (let category of categories) {
        elListCategories.innerHTML += `<option>${category}</option>`;
    }
}
function loadCategoryList() {
    fetch(urlCategories)
        .then(response => {
            if (response.ok) { // 200
                return response.json();
            } else {
                if (response.status === 404) {
                    return Promise.reject("URL does not exist");
                } else {
                    return Promise.reject("Unknown error");
                }
            }
        })
        .then(fillSelectCategories)
        // .then(categories => fillSelectCategories(categories))
        .catch(error => {
            alert("The following error occurred: " + error);
        })
}

function deleteMenuItem() {
    // console.log(this.getAttribute("data-id"));
    let idToDelete = this.getAttribute("data-id");
    fetch(`${url}/${idToDelete}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) { // 200
                return response.json();
            } else {
                if (response.status === 404) {
                    return Promise.reject("URL does not exist");
                } else {
                    return Promise.reject("Unknown error");
                }
            }
        })
        .then(grabMenu)
        .catch(error => {
            alert("The following error occurred: " + error);
        })
}
function updateMenuItem() {
    // let idToUpdate = this.getAttribute("data-id");
    let idToUpdate = fItemId.value;
    let data = {
        name: fName.value.trim(),
        description: fDescription.value.trim(),
        price: Number(fPrice.value),
        category: fCategory.value
    }
    // PUT or PATCH
    fetch(`${url}/${idToUpdate}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
        .then(response => {
            console.log(response.status); // 201 - created
            if (response.ok) {
                return response.json();
            } else {
                if (response.status === 404) {
                    return Promise.reject("URL does not exist");
                } else {
                    return Promise.reject("Unknown error");
                }
            }
        })
        .then(menuItems => {
            cleanFieldsAndButtons();
            grabMenu(menuItems);
        })
        .catch(error => {
            alert("The following error occurred: " + error);
        })
}

function fillFormToUpdate() {
    // get the data from the menu item where the user clicke on the update button
    let idToUpdate = this.getAttribute("data-id");
    // btUpdateFormFood.setAttribute("data-id", idToUpdate);
    fItemId.value = idToUpdate;
    fetch(`${url}/${idToUpdate}`)
        .then(response => {
            if (response.ok) { // 200
                return response.json();
            } else {
                if (response.status === 404) {
                    return Promise.reject("URL does not exist");
                } else {
                    return Promise.reject("Unknown error");
                }
            }
        })
        .then(menuItem => {
            console.log(menuItem);
            // assign the returned info (name, description, ...) to the corresponding form fields
            fName.value = menuItem.name;
            fDescription.value = menuItem.description;
            fPrice.value = menuItem.price;
            fCategory.value = menuItem.category;
            // show/hide buttons
            elBtUpdateButton.style.display = "inline";
            elBtCancelUpdate.style.display = "inline";
            elBtSubmitFormFood.style.display = "none";
        })
        .catch(error => {
            alert("The following error occurred: " + error);
        })
}

function showMenu(menuItems) {
    // console.log(data);
    elMenu.innerHTML = "";
    for (let item of menuItems) {
        elMenu.innerHTML += `<section class="menuItem">
            <h2><a href="foodmenuitem.html?id=${item.id}">${item.name}</a></h2>
            <p>${item.description}</p>
            <p>${item.price.toFixed(2)} €</p>
            <p>${item.category}</p>
            <p><button type="button" class="btDeleteMenuItem" data-id="${item.id}">Delete</button> <button type="button" class="btUpdateMenuItem" data-id="${item.id}">Update info</button></p>
        </section>`;
    }
    let listDeleteButtons = document.querySelectorAll(".btDeleteMenuItem");
    for (let button of listDeleteButtons) {
        button.addEventListener("click", deleteMenuItem);
    }
    let listUpdateButtons = document.querySelectorAll(".btUpdateMenuItem");
    for (let button of listUpdateButtons) {
        button.addEventListener("click", fillFormToUpdate);
    }
}

function grabMenu() {
    // fetch(url, {
    //     method: 'GET'
    // })
    fetch(url)
        .then(response => {
            if (response.ok) { // 200
                return response.json();
            } else {
                if (response.status === 404) {
                    return Promise.reject("URL does not exist");
                } else {
                    return Promise.reject("Unknown error");
                }
            }
        })
        .then(showMenu)
        .catch(error => {
            alert("The following error occurred: " + error);
        })
}

function insertMenuItem() {
    let data = {
        name: fName.value.trim(),
        description: fDescription.value.trim(),
        price: Number(fPrice.value),
        category: fCategory.value
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
        .then(response => {
            console.log(response.status); // 201 - created
            if (response.ok) {
                return response.json();
            } else {
                if (response.status === 404) {
                    return Promise.reject("URL does not exist");
                } else {
                    return Promise.reject("Unknown error");
                }
            }
        })
        // .then(grabMenu)
        .then(menuItems => {
            // fName.value = "";
            // fDescription.value = "";
            // fPrice.value = "";
            elFormFood.reset();
            grabMenu(menuItems);
        })
        .catch(error => {
            alert("The following error occurred: " + error);
        })
}

function cleanFieldsAndButtons() {
    elFormFood.reset();
    // hide buttons
    elBtUpdateButton.style.display = "none";
    elBtCancelUpdate.style.display = "none";
    elBtSubmitFormFood.style.display = "inline";
    // btUpdateFormFood.removeAttribute("data-id");
    // fItemId.value = "";
}

elBtSubmitFormFood.addEventListener("click", insertMenuItem);
elBtCancelUpdate.addEventListener("click", cleanFieldsAndButtons);
elBtUpdateButton.addEventListener("click", updateMenuItem);

loadCategoryList();
grabMenu();
