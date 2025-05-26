window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('new-task');
  const list = document.getElementById('task-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">🗑</button>
    `;

    list.appendChild(li);
    input.value = '';
  });

  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.remove();
    }
  });
});
