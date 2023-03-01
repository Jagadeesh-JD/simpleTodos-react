import './index.css'

const TodoItem = props => {
  const {todosDetails, onDeleteUser} = props
  const {id, title} = todosDetails

  const onDeleteTodo = () => {
    onDeleteUser(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
