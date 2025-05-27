window.addEventListener('DOMContentLoaded', function () {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskTable = document.getElementById('taskTable').querySelector('tbody');

  tasks.forEach(task => {
    addTaskToTable(task);
  });

  function addTaskToTable(task) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = task;
    row.appendChild(cell);

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-btn');
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    deleteButton.addEventListener('click', function () {
      row.remove();
      updateLocalStorage();
    });

    taskTable.appendChild(row);

    const checkCell = document.createElement('td');
    const checkButton = document.createElement('button');
    checkButton.textContent = '✓';
    checkButton.classList.add('check-btn');

    checkButton.addEventListener('click', function () {
        this.parentElement.parentElement.style.textDecoration = 'line-through';
    });

    checkCell.appendChild(checkButton);
    row.appendChild(checkCell);

  }

  function updateLocalStorage() {
    const rows = taskTable.querySelectorAll('tr');
    const updatedTasks = [];
    rows.forEach(row => {
      updatedTasks.push(row.cells[0].textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    addTaskToTable(taskText);

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = '';
  });
});
