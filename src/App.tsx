import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
// import CounterContainer from './containers/CounterContainer';
import Home from './components/Home';
import Counter from './components/Counter';
import TodoInset from './components/TodoInsert';
import TodoList from './components/TodoList';
import GithubProfileLoader from './containers/GithubProfileLoader';
import Tour from './components/Tour';
import Header from './components/nav/Header';


function App() {
  return (
    //<CounterContainer />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/counter" component={Counter} />
        <Route exact={true} path="/todo-insert" component={TodoInset} />
        <Route exact={true} path="/todo-list" component={TodoList} />
        <Route exact={true} path="/git-info" component={GithubProfileLoader} />
        <Route exact={true} path="/tour-plan" component={Tour} />
        {/* not fount */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
