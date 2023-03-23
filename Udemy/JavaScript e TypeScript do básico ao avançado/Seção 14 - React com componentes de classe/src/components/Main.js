import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    const { newTask } = this.state;

    return (
      <main>
        <div className="container">
          <h1>Lista de Tarefas</h1>

          <form action="#">
            <input
              onChange={this.handleInputChange}
              type="text"
              value={newTask}
            />
            <button type="submit">
              <FaPlus className="icon" />
            </button>
          </form>
        </div>
      </main>
    );
  }
}
