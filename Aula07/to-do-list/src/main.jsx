import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoList from './ToDoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <TodoList />
    <App />
  </StrictMode>,
)
