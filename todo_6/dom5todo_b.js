let btInsert = document.querySelector("#btInsertTask");
let elTask = document.querySelector("#task");
let elDate = document.querySelector("#date");
let elTableTasks = document.querySelector("#tableTasks");
let elTableTasksBody = document.querySelector("#tableTasks tbody");
// let elTableTasks = document.querySelector("#tableTasks");
let btSearchButton = document.querySelector("#btSearch");
let taskToSearchField = document.querySelector("#searchTask");
let elErrorMsg = document.querySelector("#errorMsg");
let btClearSearchButton = document.querySelector("#btClearSearch");

let listTasks = []; // source of truth

function removeTaskListeners() {
    let deleteButtons = document.querySelectorAll(".btDeleteTask");
    for (let button of deleteButtons) {
        button.addEventListener("click", function () {
            // console.log("Clicked");
            let taskNameToDelete = this.getAttribute("data-task");
            // console.log(taskName);
            // listTasks = listTasks.filter(task => task.taskName !== taskNameToDelete);
            // Alternative
            let pos = listTasks.findIndex(task => task.taskName === taskNameToDelete);
            listTasks.splice(pos, 1);
            showTasks(listTasks);
        });
    }
}

function showTasks(list) {
    if (list.length > 0) {
        let content = "";
        for (let task of list) {
            content += `<tr><td>${task.taskName}</td><td>${task.date}</td><td><button type="button" class="btDeleteTask" data-task="${task.taskName}">X</button></td></tr>`;
        }
        elTableTasksBody.innerHTML = content;
        document.querySelector("#totalNumberTasks").textContent = list.length;

        removeTaskListeners();

        elTableTasks.classList.remove("hidden");

        elErrorMsg.classList.add("hidden");

    } else {
        document.querySelector("#tableTasks").classList.add("hidden");
        elErrorMsg.classList.remove("hidden");
    }
}

function insertTask() {
    let value = elTask.value.trim();
    let dateValue = elDate.value.trim();
    if (value === "") {
        alert("You must provide a task!");
    } else {
        // if (listTasks.filter(task => task.taskName.toUpperCase() === value.toUpperCase()).length !== 0) {
        if (listTasks.find(task => task.taskName.toUpperCase() === value.toUpperCase())) {
            alert("That task already exists in the list!");
        } else {
            listTasks.push({
                taskName: value,
                date: dateValue
            });
            elTask.value = '';
            elDate.value = '';
            showTasks(listTasks);
        }
    }
    elTask.focus();
}
function filterTasks() {
    let valueToFilter = taskToSearchField.value.trim();
    let result = listTasks.filter(task => task.taskName.toUpperCase().includes(valueToFilter.toUpperCase()));
    showTasks(result);
}
function clearSearch() {
    showTasks(listTasks);
    taskToSearchField.value = "";
}

function changeOrder(){
   let result = [...listTasks].sort((taskA, taskB) => {
        taskA = taskA.taskName.toLowerCase();
        taskB = taskB.taskName.toLowerCase();
        
        // if(taskA < taskB){
        //     return -1;
        // }
        // if(taskA > taskB){
        //     return 1;
        // }

        return(taskA < taskB) ? -1 : 1;
    });
    showTasks(result);
}


btInsert.addEventListener("click", insertTask);
btSearchButton.addEventListener("click", filterTasks);
btClearSearchButton.addEventListener("click", clearSearch);
// keyboard events - keydown, keypress, keyup, input
searchTask.addEventListener("input", filterTasks);
thOrderByTask.addEventListener("click", changeOrder());


// Remove THIS AT THE END
listTasks.push({
    taskName: "sleeping",
    date: "2024-06-30"
}, {
    taskName: "eating",
    date: "2024-07-05"
});
showTasks(listTasks);
