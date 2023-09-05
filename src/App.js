import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="one" />
      <Todo text="two" />
      <Todo text="three" />
      <Todo text="four" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
