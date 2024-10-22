// Seleciona os elementos do DOM
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, digite uma tarefa.");
        return;
    }

    // Cria um novo item da lista
    const li = document.createElement('li');
    li.textContent = taskText;

    // Cria o botão para remover a tarefa
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.className = 'remove-button'; // Adiciona uma classe para estilização
    removeButton.onclick = function () {
        taskList.removeChild(li);
        updateLocalStorage(); // Atualiza o Local Storage ao remover
    };

    // Adiciona o botão ao item da lista
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Limpa o campo de entrada
    taskInput.value = "";
}

// Adiciona evento de clique ao botão
addTaskButton.addEventListener('click', addTask);

// Permite adicionar tarefa ao pressionar "Enter"
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Carrega tarefas do Local Storage ao iniciar
window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function () {
            taskList.removeChild(li);
            updateLocalStorage();
        };
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
};

// Atualiza o Local Storage
function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

li.onclick = function() {
    li.classList.toggle('completed');
    updateLocalStorage(); // Atualiza o Local Storage após marcar
};


