const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addBtn = document.getElementById('add-btn');

// ========== EVENT LISTENERS ==========
addBtn.addEventListener('click', handleAddTask);
inputBox.addEventListener('keypress', handleEnterKey);
listContainer.addEventListener('click', handleListClick);

// ========== FUNCTIONS ==========

// Tambah task
function handleAddTask() {
    const taskText = inputBox.value.trim();

    if (!taskText) {
        alert('You must write something!');
        return;
    }

    const li = createTaskElement(taskText);
    listContainer.appendChild(li);

    inputBox.value = '';
    saveData();
}

// Enter key
function handleEnterKey(e) {
    if (e.key === 'Enter') {
        handleAddTask();
    }
}

// Klik di list (check / delete)
function handleListClick(e) {
    const target = e.target;

    if (target.tagName === 'LI') {
        toggleTask(target);
    }

    if (target.tagName === 'SPAN') {
        deleteTask(target);
    }

    saveData();
}

// ========== HELPER FUNCTIONS ==========

// Buat elemen task
function createTaskElement(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '\u00d7';

    li.appendChild(deleteBtn);
    return li;
}

// Toggle checked
function toggleTask(taskElement) {
    taskElement.classList.toggle('checked');
}

// Hapus task
function deleteTask(deleteBtn) {
    deleteBtn.parentElement.remove();
}

// Simpan ke localStorage
function saveData() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

// Load dari localStorage
function loadData() {
    const data = localStorage.getItem('tasks');
    if (data) {
        listContainer.innerHTML = data;
    }
}

// Init
loadData();