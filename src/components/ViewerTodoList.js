import React from 'react'
import PropTypes from 'prop-types'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../environment'
import TodoList from './TodoList'

export default class ViewerTodoList extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ViewerQuery {
            viewer {
              id
              ...TodoList_userTodoData
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }
          return (
            <div>
              <div>Todo list for User {props.viewer.id}:</div>
              <TodoList userTodoData={props.viewer} />
            </div>
          )
        }}
      />
    )
  }
}