import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../styles/tab.css';

const Tab = ({ children, to, exact }) => {

  const match = useRouteMatch({
    path: to,
    exact,
  });

  return (
    <Link to={to} className="tab">
      {children}
      {match ? <div className="tab-selected" /> : null}
    </Link>
  );
};

export default Tab;