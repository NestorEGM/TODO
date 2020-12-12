import React from 'react';
import '../styles/list.css';
import ListItem from './listItem';

const List = ({ todoList = [], completed = false }) => {

  const itemStyle = { marginBottom: 29 };
  return (
    <section className="list">
      {
        todoList && todoList.length ?
          todoList.map((todoItem, index) => (
            <ListItem
              key={todoItem.id}
              id={todoItem.id}
              style={index === (todoList.length - 1) ? {} : itemStyle}
              completed={todoItem.completed}
              showDelete={completed}
            >
              {todoItem.title}
            </ListItem>
          )) : null
      }
    </section>
  );
};

export default List;