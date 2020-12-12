import React, { useState } from 'react';
import '../styles/listItem.css';
import { toggleTodo, deleteTodo } from '../store/todo';

const ListItem = ({ id, style = {}, children, completed = false, showDelete = false }) => {

  const [checked, setChecked] = useState(completed);

  const handleChecbox = e => {
    setChecked(e.target.checked);
    toggleTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const listItemClass = checked ? 'listItem listItem--selected' : 'listItem';

  return (
    <label htmlFor={id} className={listItemClass} style={style}>
      {children}
      <input type="checkbox" id={id} checked={checked} onChange={handleChecbox} />
      <span className="checkmark" />
      {
        showDelete ?
          <div>
            <i class="material-icons md-24" onClick={handleDelete}>delete_outline</i>
          </div>
          : null
      }
    </label>
  );
};

export default ListItem;