import React, { useState, useEffect } from 'react';
import '../styles/todos.css';
import AddTodo from './addTodo';
import List from './list';
import { init, subscribe, filterTodos, deleteAll } from '../store/todo';

const Todos = ({ active = false, completed = false }) => {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    subscribe(setTodos);
    init();
    // eslint-disable-next-line
  }, []);

  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    filterTodos(active, completed, setFilteredTodos);
    // eslint-disable-next-line
  }, [todos, active, completed]);

  return (
    <>
      {
        !completed ?
          <AddTodo />
          : null
      }
      <List
        todoList={filteredTodos}
        completed={completed}
      />
      {
        completed && filteredTodos.length ?
          <div className="buttonWrapper">
            <button onClick={deleteAll}>
              <i class="material-icons md-18">delete_outline</i>
              delete all
            </button>
          </div>
          : null
      }
    </>
  );
};

export default Todos;