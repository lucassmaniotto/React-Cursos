import React from 'react';
import PropTypes from 'prop-types';
import { FaMinus, FaEdit } from 'react-icons/fa';
import Button from '../Button';
import Input from '../Input';

import './Ul.css';

export default function Ul({ tasks, handleDelete, handleEdit }) {
  return (
    <ul className='tasks'>
      {tasks.map((task, index) => (
        <li key={task}>
          <Input type='checkbox' />
          <span>{task}</span>
          <div>
            <Button
              onClick={(e) => handleEdit(e, index)}
              type='button'
            >
              <FaEdit className='icon' />
            </Button>
            <Button
              onClick={(e) => handleDelete(e, index)}
              type='button'
            >
              <FaMinus className='icon' />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

Ul.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
