// @flow
import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

type Props = {
  todo: Todo_todo
}

class Todo extends React.Component<Props> {
  render() {
    const { complete, text } = this.props.todo

    return (
      <li>
        <div>
          <input
            checked={complete}
            type="checkbox"
          />

          <label>{text}</label>
        </div>
      </li>
    )
  }
}

export default createFragmentContainer(
  Todo,
  graphql`
    # Fragment's name: 'ComponentFileName_propName'
    fragment Todo_todo on Todo {
      complete
      text
    }
  `
)
