import { Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

let initTodos = [];

const todo$ = new Subject(initTodos);

const getStorageTodos = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
const setStorageTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
  todo$.next(todos);
};

export const init = () => {
  todo$.next(getStorageTodos());
};

export const subscribe = setter => todo$.subscribe(setter);

export const addTodo = (title, completed = false) => {
  const newTodo = {
    id: uuid(),
    title,
    completed,
  };
  let state = getStorageTodos();
  state = [
    ...state,
    newTodo,
  ];
  setStorageTodos(state);
};

export const toggleTodo = id => {
  const state = getStorageTodos();
  const todoIndex = state.findIndex(item => item.id === id);
  state[todoIndex].completed = !state[todoIndex].completed;
  setStorageTodos(state);
};

export const filterTodos = (active = false, completed = false, setter) => {
  const state = getStorageTodos();
  let filteredTodos = [];
  if (active) {
    filteredTodos = state.filter(item => !item.completed);
  } else if (completed) {
    filteredTodos = state.filter(item => item.completed);
  } else {
    filteredTodos = state;
  }
  setter(filteredTodos);
};

export const deleteTodo = id => {
  const state = getStorageTodos();
  const newTodos = state.filter(item => item.id !== id);
  setStorageTodos(newTodos);
};

export const deleteAll = () => {
  setStorageTodos([]);
}