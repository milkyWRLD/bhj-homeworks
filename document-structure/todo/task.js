document.addEventListener("DOMContentLoaded", function () {
    let tasksList = document.getElementById('tasks__list');
    let tasksForm = document.getElementById('tasks__form');
    let taskInput = document.getElementById('task__input');

    tasksForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let taskTitle = taskInput.value.trim();
        if (taskTitle !== '') {
            addTask(taskTitle);
            taskInput.value = '';
        }
    });

    tasksList.addEventListener('click', function (event) {
        if (event.target.classList.contains('task__remove')) {
            removeTask(event.target.closest('.task'));
        }
    });

    function addTask(title) {
        let task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = '<div class="task__title">' + title + '</div>' +
            '<a href="#" class="task__remove">&times;</a>';
        tasksList.appendChild(task);
        saveTasks();
    }

    function removeTask(task) {
        tasksList.removeChild(task);
        saveTasks();
    }

    function saveTasks() {
        let tasks = [];
        let taskElements = tasksList.querySelectorAll('.task__title');
        taskElements.forEach(function (taskElement) {
            tasks.push(taskElement.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function (title) {
            addTask(title);
        });
    }

    loadTasks();
});
