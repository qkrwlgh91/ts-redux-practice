import React from 'react';
// import CounterContainer from './containers/CounterContainer';
import Counter from './components/Counter';
import TodoInset from './components/TodoInsert';
import TodoList from './components/TodoList';
import GithubProfileLoader from './containers/GithubProfileLoader';

function App() {
  return (
    //<CounterContainer />
    <>
      <Counter />
      <TodoInset />
      <TodoList />
      <hr />
      <GithubProfileLoader />
    </>
  );
}

export default App;
