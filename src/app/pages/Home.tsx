import { useEffect, useState } from 'react'

const Home = () => {
  const [todo, setTodo] = useState<string>([])
  const [todoText, setTodoText] = useState<string>('')
  const [compeleteTodo, setCompeleteTodo] = useState<string>('')
  const handleTodoText = (e: string): void => {
    const addText = e.target.value
    setTodoText(addText)
  }
  const handleAddTodo = (): void => {
    if (todoText === '') return
    const savedTodos = localStorage.getItem('todos')
    const todos = savedTodos ? JSON.parse(savedTodos) : []
    const newTodo = {
      id: todos.length + 1,
      text: todoText,
    }
    const newTodos = [...todos, newTodo]
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodoText('')

    setTodo(newTodos)
  }

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    const todos = savedTodos ? JSON.parse(savedTodos) : []
    setTodo(todos)
  }, [])

  type Todo = {
    id: number
    text: string
  }

  const handleDeleteTodo = (id: number): void => {
    const savedTodos = localStorage.getItem('todos')
    const todos = savedTodos ? JSON.parse(savedTodos) : []
    const newTodos = todos.filter((todo: Todo) => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodo(newTodos)
  }
  const handleCompeleteTodo = (id: number): void => {
    if (id === id) {
      setCompeleteTodo('compelete')
    }
  }
  return (
    <div>
      <h1 className="text-3xl  text-blue-400 text-center">Todo List</h1>
      <p className=" text-xl text-center">Make Todo Data</p>

      <div className=" flex  flex-col items-center">
        <input
          className="input input-secondary"
          type="text"
          onBlur={handleTodoText}
        />
        <button onClick={handleAddTodo} className="btn btn-primary">
          Add
        </button>

        <ul>
          {todo.map((item: Todo) => (
            <li key={item.id}>
              <span className={`h6  ${compeleteTodo ? ' line-through' : ''}`}>
                {item.text}
              </span>

              <button
                className="btn btn-sm btn-secondary  "
                onClick={() => handleCompeleteTodo(item.id)}
              >
                compelete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
