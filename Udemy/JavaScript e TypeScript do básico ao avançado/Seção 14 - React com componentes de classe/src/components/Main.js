import React, { Component } from 'react';

import { FaPlus, FaMinus, FaEdit } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (newTask === '') return;
    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;
      this.setState({
        tasks: [...newTasks],
        index: -1,
        newTask: '',
      });
    }
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      index,
      newTask: tasks[index],
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({ tasks: [...newTasks] });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <main>
        <div className='container'>
          <h1>Lista de Tarefas</h1>

          <form
            onSubmit={this.handleSubmit}
            action='#'
          >
            <input
              onChange={this.handleInputChange}
              type='text'
              value={newTask}
            />
            <button type='submit'>
              <FaPlus className='icon' />
            </button>
          </form>
          <ul className='tasks'>
            {tasks.map((task, index) => (
              <li key={task}>
                <input type='checkbox' />
                <span>{task}</span>
                <div>
                  <button
                    onClick={(e) => this.handleEdit(e, index)}
                    type='button'
                  >
                    <FaEdit className='icon' />
                  </button>
                  <button
                    onClick={(e) => this.handleDelete(e, index)}
                    type='button'
                  >
                    <FaMinus className='icon' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </main>
    );
  }
}
