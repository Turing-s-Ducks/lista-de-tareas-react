import './Todo.css';

function Todo() {
  return (
    <div className="container">
        <h1>
        Lista de tareas
        </h1>
        <form>
            <input placeholder='Add new task' className='input-nw'></input>
            <button className='add-button' type="submit">+</button>
        </form>
        <ul>
            <li className='Item'> New Task</li>
            <li className='Item'> New Task</li>
            <li className='Item'> New Task</li>
            <li className='Item'> New Task</li>
            <li className='Item'> New Task</li>
        </ul>
    </div>
  );
}

export default Todo;