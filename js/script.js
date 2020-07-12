const addForm = document.getElementById('add-task-form');
const inputTask = document.getElementById('add-task');
const inputFilter = document.getElementById('filter');
const taskList = document.getElementById('task-list');
const clearBtn = document.getElementById('clear-btn');

// Clear new task input
const clearInput = () => {
    inputTask.value = '';
};

// Add new item to list
const addItem = (e) => {
    e.preventDefault();
    const newTask = inputTask.value;

    // Check if input is empty
    if (newTask === '') {
        alert('Please enter a new task')
    };

    // Create new element
    const newEl = document.createElement('li');
    newEl.classList.add('list-item');
    newEl.innerHTML = `${newTask}<a href="#" class="delete-item">X</a>`;
    // Add new element to DOM
    taskList.appendChild(newEl);
    // Clear form input
    clearInput();
};

// Delete item
const deleteItem = (e) => {
    if (e.target.classList.contains('delete-item')) {
        e.target.parentElement.remove();
    };
};

// Clear list
const clearList = () => {
    while (taskList.firstChild) {
        taskList.firstChild.remove();
    };
};

// Filter list
const filterList = () => {
    const text = inputFilter.value.toLowerCase();

    const items = document.querySelectorAll('.list-item');
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(text)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        };
    });
};

// Add event listeners
addForm.addEventListener('submit', addItem);

taskList.addEventListener('click', deleteItem);

clearBtn.addEventListener('click', clearList);

inputFilter.addEventListener('input', filterList);