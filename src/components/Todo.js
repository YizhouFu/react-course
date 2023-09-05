function Todo(props) {
  function handleDelete() {
    console.log('clicked');
    console.log(props.text);
  }


  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default Todo;
