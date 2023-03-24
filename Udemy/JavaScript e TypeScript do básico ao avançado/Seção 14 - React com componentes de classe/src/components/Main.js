import React, { Component } from 'react';
import Form from './Form';
import Ul from './Ul';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevState) {
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

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
          <Form
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            newTask={newTask}
          />
          <Ul
            tasks={tasks}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>
      </main>
    );
  }
}
