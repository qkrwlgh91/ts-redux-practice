import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
// import CounterContainer from './containers/CounterContainer';
import Counter from './components/Counter';
import TodoInset from './components/TodoInsert';
import TodoList from './components/TodoList';
import GithubProfileLoader from './containers/GithubProfileLoader';

function App() {
  return (
    //<CounterContainer />
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/counter" component={Counter} />
        <Route exact={true} path="/todo-insert" component={TodoInset} />
        <Route exact={true} path="/todo-list" component={TodoList} />
        <Route exact={true} path="/git-info" component={GithubProfileLoader} />
        {/* not fount */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
