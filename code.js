let input = document.querySelector(".input-task");
let submitbtn = document.querySelector(".submit-btn");
let newListBtn = document.querySelector(".new-list");
let list = document.querySelector(".list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let newList = document.createElement("li");

        let eleInsideList = document.createElement("span");
        eleInsideList.innerText = task.text;
        newList.appendChild(eleInsideList);

        // status styling
        if (task.status === "completed") {
            eleInsideList.style.textDecoration = "line-through";
            eleInsideList.style.opacity = "0.5";
        } else if (task.status === "uncompleted") {
            eleInsideList.style.color = "red";
        }

        // buttons
        let comBtn = document.createElement("button");
        comBtn.innerText = "Completed";
        comBtn.classList.add("li-btns");

        let unComBtn = document.createElement("button");
        unComBtn.innerText = "Un-Completed";
        unComBtn.classList.add("li-btns");

        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("li-btns");

        //  button opacity
        if (task.status === "completed") {
            comBtn.style.opacity = "0.5";
            unComBtn.style.opacity = "1";
        } else if (task.status === "uncompleted") {
            unComBtn.style.opacity = "0.5";
            comBtn.style.opacity = "1";
        } else {
            comBtn.style.opacity = "1";
            unComBtn.style.opacity = "1";
        }

        // button group div
        let btnsGroup = document.createElement("div");
        btnsGroup.classList.add("btn-group");
        btnsGroup.appendChild(comBtn);
        btnsGroup.appendChild(unComBtn);
        btnsGroup.appendChild(delBtn);

        newList.appendChild(btnsGroup);
        list.appendChild(newList);


        comBtn.addEventListener("click", () => {
            if (task.status === "completed") {
                task.status = "pending";
            } else {
                task.status = "completed";
            }
            saveTasks();
            renderTasks();
        });

        unComBtn.addEventListener("click", () => {
            if (task.status === "uncompleted") {
                task.status = "pending";
            } else {
                task.status = "uncompleted";
            }
            saveTasks();
            renderTasks();
        });

        delBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });
    });


    if (tasks.length > 0) {
        newListBtn.classList.remove("hidden");
    }
}

submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let inputText = input.value.trim();
    if (inputText === "") return;

    tasks.push({ text: inputText, status: "pending" });
    saveTasks();
    renderTasks();
    input.value = "";
});

newListBtn.addEventListener("click", () => {
    tasks = [];
    saveTasks();
    renderTasks();
});

window.addEventListener("DOMContentLoaded", () => {
    renderTasks();
});