import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import Button from '../Button';
import Input from '../Input';

import './Form.css';

export default function Form({ handleSubmit, handleInputChange, newTask }) {
  return (
    <form
      onSubmit={handleSubmit}
      action='#'
    >
      <Input
        onChange={handleInputChange}
        type='text'
        value={newTask}
      />
      <Button type='submit'>
        <FaPlus className='icon' />
      </Button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
