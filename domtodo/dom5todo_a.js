let formName = document.querySelector("#taskForm");
let elTask = document.querySelector("#task");
let list = document.querySelector("#todosList");

function insertTask(e) { // e, evt, event
    e.preventDefault(); // preventing the default behavior of the form
    let value = elTask.value.trim();
    list.innerHTML += `<li>${value}</li>`;
    elTask.value = '';
}

formName.addEventListener("submit", insertTask);