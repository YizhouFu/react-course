import { useState } from "react";
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    setShowModal(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
      { showModal && <Modal />}
      { showModal && <Backdrop />}
    </div>
  );
}

export default Todo;
