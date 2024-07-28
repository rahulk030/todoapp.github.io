document.addEventListener('DOMContentLoaded', (event) => {
    // Function to display the current date
    function displayDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('en-US', options);
        document.getElementById('currentDate').innerHTML = dateString;
    }

    // Call the function to display the date initially
    displayDate();

    // Function to show the to-do list based on selected category
    window.showList = function (category) {
        // Implement this function to display tasks for the selected category
    }

    // Function to add a new task
    window.addTask = function () {
        const taskInput = document.getElementById('newTask');
        const dueDateInput = document.getElementById('dueDate');
        const task = taskInput.value;
        const dueDate = dueDateInput.value;

        if (task) {
            const taskItem = document.createElement('li');
            taskItem.textContent = `${task} (Due: ${dueDate})`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () {
                taskItem.remove();
            };
            taskItem.appendChild(deleteButton);

            document.getElementById('todoList').appendChild(taskItem);
            taskInput.value = '';
            dueDateInput.value = '';
        }
    }

    // Function to create a new list
    window.createNewList = function () {
        // Implement this function to allow creating new lists
    }

    // Implement search functionality
    document.getElementById('searchTodo').addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const tasks = document.querySelectorAll('#todoList li');
        tasks.forEach(task => {
            const taskText = task.textContent.toLowerCase();
            if (taskText.includes(query)) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        });
    });
});
