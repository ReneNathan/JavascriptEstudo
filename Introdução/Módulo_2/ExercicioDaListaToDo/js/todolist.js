const itemUnput = document.getElementById("item-input")
const todoAddForm = document.getElementById("todo-add")
const ul = document.getElementById("todo-list")

todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    ul.innerHTML += `
                <li class="todo-item">
                    <button class="button-check">
                        <i class="fas fa-check displayNone"></i>
                    </button>
                    <p class="task-name">${itemUnput.value}</p>
                    <i class="fas fa-edit"></i>
                    <!-- <div class="editContainer">
                        <input class="editInput" type="text">
                        <button class="editButton">Edit</button>
                        <button class="cancelButton">Cancel</button>
                    </div> -->
                    <i class="fas fa-trash-alt"></i>
                </li>
    `
    itemUnput.value = "";
    itemUnput.focus();
})