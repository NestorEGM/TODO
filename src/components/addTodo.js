import React, { useState } from 'react';
import '../styles/addTodo.css';
import { addTodo } from '../store/todo';

const AddTodo = () => {

  const [newTodo, setNewTodo] = useState('');
  const handleInput = e => {
    setNewTodo(e.target.value);
  };

  const onClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <section className="addTodo">
      <input
        type="text"
        name="addTask"
        placeholder="add details"
        value={newTodo}
        onChange={handleInput}
        onKeyUp={e => {
          if (e.key.match('Enter')) {
            onClick();
          }
        }}
      />
      <button onClick={onClick}>
        Add
      </button>
    </section>
  );
}

export default AddTodo;