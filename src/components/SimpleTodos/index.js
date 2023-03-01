import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  onDeleteUser = id => {
    const {todosList} = this.state
    const filteredTodosData = todosList.filter(eachUser => eachUser.id !== id)
    this.setState({todosList: filteredTodosData})
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="orange-container">
        <div className="white-container">
          <h1 className="header">Simple Todos</h1>
          <ul className="list-container">
            {todosList.map(each => (
              <TodoItem
                todosDetails={each}
                key={each.id}
                onDeleteUser={this.onDeleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
