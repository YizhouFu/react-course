function Modal(props) {
  function handleCancel() {
    props.onCancel();
  }

  return (
    <div className="modal">
      <p>are you sure?</p>
      <button className="btn btn--alt" onClick={handleCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
