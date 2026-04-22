import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // all | pending | done

  // Adicionar tarefa
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  // Marcar como concluída
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  // Remover tarefa
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filtrar tarefas
  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.done;
    if (filter === 'done') return task.done;
    return true;
  });

  return (
    <div>
      <h2>Lista de Tarefas!</h2>

      {/* Formulário */}
      <form onSubmit={handleAddTask}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Adicione uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* Filtros */}
      <div>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('pending')}>Pendentes</button>
        <button onClick={() => setFilter('done')}>Concluídas</button>
      </div>

      {/* Lista */}
      <ul>
        {filteredTasks.length === 0 ? (
          <p>Nenhuma tarefa encontrada💭</p>
        ) : (
          filteredTasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />

              <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                {task.text}
              </span>

              <button onClick={() => removeTask(task.id)}>
                Deletar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;