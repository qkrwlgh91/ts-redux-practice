import React from 'react';
// import CounterContainer from './containers/CounterContainer';
import Counter from './components/Counter';
import TodoInset from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    //<CounterContainer />
    <>
      <Counter />
      <TodoInset />
      <TodoList />
    </>
  );
}

export default App;
