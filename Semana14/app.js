// app.js - funcionalidad CRUD usando localStorage
(function(){
  const STORAGE_KEY = 'todo_semana14_tasks_v1';
  let tasks = [];

  // elementos
  const taskForm = document.getElementById('task-form');
  const titleInput = document.getElementById('title');
  const descInput = document.getElementById('description');
  const clearBtn = document.getElementById('clear-btn');

  const searchInput = document.getElementById('search');
  const filterSelect = document.getElementById('filter');
  const taskList = document.getElementById('task-list');

  const editModal = document.getElementById('edit-modal');
  const editForm = document.getElementById('edit-form');
  const editIdInput = document.getElementById('edit-id');
  const editTitleInput = document.getElementById('edit-title-input');
  const editDescInput = document.getElementById('edit-description-input');
  const editDoneInput = document.getElementById('edit-done');
  const editCancelBtn = document.getElementById('edit-cancel');

  // init
  loadTasks();
  bindEvents();
  renderTasks();

  function loadTasks(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      tasks = raw ? JSON.parse(raw) : [];
    }catch(e){
      tasks = [];
    }
  }

  function saveTasks(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  function bindEvents(){
    taskForm.addEventListener('submit', onAddTask);
    clearBtn.addEventListener('click', () => { titleInput.value=''; descInput.value=''; titleInput.focus(); });

    searchInput.addEventListener('input', renderTasks);
    filterSelect.addEventListener('change', renderTasks);

    editForm.addEventListener('submit', onSaveEdit);
    editCancelBtn.addEventListener('click', closeEdit);

    // cerrar modal con Escape
    window.addEventListener('keydown', (e) => { if(e.key==='Escape') closeEdit(); });
  }

  function onAddTask(e){
    e.preventDefault();
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    if(!title) return;
    const task = { id: Date.now().toString(), title, description, done:false, createdAt: new Date().toISOString() };
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskForm.reset();
    titleInput.focus();
  }

  function renderTasks(){
    const q = searchInput.value.trim().toLowerCase();
    const filter = filterSelect.value;
    taskList.innerHTML = '';

    const filtered = tasks.filter(t => {
      if(filter==='done' || filter==='pending'){
        if(filter==='done' && !t.done) return false;
        if(filter==='pending' && t.done) return false;
      }
      if(!q) return true;
      return (t.title||'').toLowerCase().includes(q) || (t.description||'').toLowerCase().includes(q);
    });

    if(filtered.length===0){
      const li = document.createElement('li');
      li.className='task-item';
      li.innerHTML = '<div class="task-main"><p class="task-title">No hay tareas</p><p class="task-desc">Agrega una tarea usando el formulario.</p></div>';
      taskList.appendChild(li);
      return;
    }

    filtered.forEach(t => {
      const li = document.createElement('li');
      li.className = 'task-item';

      const main = document.createElement('div');
      main.className = 'task-main';

      const title = document.createElement('p');
      title.className = 'task-title';
      title.textContent = t.title + (t.done ? ' ✅' : '');

      const desc = document.createElement('p');
      desc.className = 'task-desc';
      desc.textContent = t.description || '';

      const meta = document.createElement('div');
      meta.className = 'task-meta';
      const date = new Date(t.createdAt).toLocaleString();
      meta.textContent = `Creada: ${date}`;

      main.appendChild(title);
      if(t.description) main.appendChild(desc);
      main.appendChild(meta);

      const actions = document.createElement('div');
      actions.className = 'task-actions';

      const editBtn = document.createElement('button');
      editBtn.className = 'small-btn';
      editBtn.textContent = 'Editar';
      editBtn.addEventListener('click', () => openEdit(t.id));

      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'small-btn';
      toggleBtn.textContent = t.done ? 'Marcar pendiente' : 'Marcar completada';
      toggleBtn.addEventListener('click', () => toggleDone(t.id));

      const delBtn = document.createElement('button');
      delBtn.className = 'small-btn danger';
      delBtn.textContent = 'Eliminar';
      delBtn.addEventListener('click', () => removeTask(t.id));

      actions.appendChild(editBtn);
      actions.appendChild(toggleBtn);
      actions.appendChild(delBtn);

      li.appendChild(main);
      li.appendChild(actions);
      taskList.appendChild(li);
    });
  }

  function openEdit(id){
    const t = tasks.find(x=>x.id===id);
    if(!t) return;
    editIdInput.value = t.id;
    editTitleInput.value = t.title;
    editDescInput.value = t.description || '';
    editDoneInput.checked = !!t.done;
    editModal.classList.remove('hidden');
    editTitleInput.focus();
  }

  function closeEdit(){
    editModal.classList.add('hidden');
    editForm.reset();
  }

  function onSaveEdit(e){
    e.preventDefault();
    const id = editIdInput.value;
    const idx = tasks.findIndex(x=>x.id===id);
    if(idx===-1) return closeEdit();
    tasks[idx].title = editTitleInput.value.trim() || tasks[idx].title;
    tasks[idx].description = editDescInput.value.trim();
    tasks[idx].done = editDoneInput.checked;
    saveTasks();
    renderTasks();
    closeEdit();
  }

  function removeTask(id){
    if(!confirm('¿Eliminar esta tarea?')) return;
    tasks = tasks.filter(t=>t.id!==id);
    saveTasks();
    renderTasks();
  }

  function toggleDone(id){
    const t = tasks.find(x=>x.id===id);
    if(!t) return;
    t.done = !t.done;
    saveTasks();
    renderTasks();
  }

})();
