function addTask() {
  const taskInput = document.getElementById('task');
  const task = taskInput.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;
  li.onclick = () => li.classList.toggle('done');
  document.getElementById('list').appendChild(li);
  taskInput.value = '';
}