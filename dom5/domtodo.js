let btInsert = document.querySelector("#btInsertTask");
let elTask = document.querySelector("#task");
let list = document.querySelector("#todosList");

function insertTask() {
    let value = elTask.value;
    // console.log(value);
    list.innerHTML += `<li>${value}</li>`;
    elTask.value = '';
    elTask.focus();
}
btInsert.addEventListener("click", insertTask);