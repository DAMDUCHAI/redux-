import React, { Component } from 'react'
import ToDoHeader from './ToDoHeader'
import ToDoList from './ToDoList'
import ToDoSearch from './ToDoSearch'

export default class ToDoRedux extends Component {
  render() {
    return (

           <div className='container '>
          <ToDoHeader/>
          <ToDoSearch/>
          <ToDoList/>
      </div>
    )
  }
}
