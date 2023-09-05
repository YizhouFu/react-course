import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="one" />
      <Todo text="two" />
      <Todo text="three" />
      <Todo text="four" />
    </div>
  );
}

export default App;
