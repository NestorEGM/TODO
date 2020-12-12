import './App.css';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Tab from './components/tab';
import Todos from './components/todos';

function App() {
  const completedRouteMatch = useRouteMatch({
    path: '/completed',
  })
  const contentClass = !completedRouteMatch ? 'content content--padding' : 'content';
  return (
    <section className="App">
      <header>
        <h1>#todo</h1>
        <nav>
          <Tab to="/all">All</Tab>
          <Tab to="/active">Active</Tab>
          <Tab to="/completed">Completed</Tab>
        </nav>
      </header>
      <section className={contentClass}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/all" />
          </Route>
          <Route path="/all">
            <Todos />
          </Route>
          <Route path="/active">
            <Todos active />
          </Route>
          <Route path="/completed">
            <Todos completed />
          </Route>
        </Switch>
      </section>
    </section>
  );
}

export default App;
