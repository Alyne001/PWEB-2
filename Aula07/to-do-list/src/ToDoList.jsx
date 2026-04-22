import { useState } from 'react'
import './App.css'

function TodoList() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (input.trim() === '') return

    setTasks([...tasks, { text: input, done: false }])
    setInput('')
  }

  function toggleTask(index) {
    const newTasks = [...tasks]
    newTasks[index].done = !newTasks[index].done
    setTasks(newTasks)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {/* 👇 checkbox */}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />

            {/* 👇 texto da tarefa */}
            <span
              style={{
                textDecoration: task.done ? 'line-through' : 'none'
              }}
            >
            {task.text}
            </span>
            {task}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList