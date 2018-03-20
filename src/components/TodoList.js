import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import Todo from './Todo';

type Props = {
  userTodoData: TodoList_userTodoData
}

class TodoList extends React.Component<Props> {
  render() {
    const { userTodoData: { totalCount, completedCount, todos } } = this.props

    return (
      <section>
        <input
          checked={totalCount === completedCount}
          type="checked"
        />

        <ul>
          {todos.edges.map(edge => {
            <Todo
              key={edge.node.id}
              todo={edge.node}
            />
          })}
        </ul>
      </section>
    )
  }
}

export default createFragmentContainer(
  TodoList,
  graphql`
    fragment TodoList_userTodoData on User {
      todos(first: 2147483647) {
        edges {
          node {
            id,
            ...Todo_todo
          }
        }
      },
      id,
      totalCount,
      completedCount
    }
  `
)
