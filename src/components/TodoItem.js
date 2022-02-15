
import {FaEdit,FaTrashAlt } from "react-icons/fa";

const TodoItem = ({
  todo,
  handleDelete,
  setEdit,
}) => {
  return (    
    <li className="list-item">
      <div>
        <button className="button-edit" onClick={() => setEdit(todo)}>
          <FaEdit />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo)}>
          <FaTrashAlt />
        </button>
      </div>
      <input
        type="text"
        value={todo.nombreMovimiento}
        className={`list `}
        onChange={(e) => e.preventDefault}
      />
      <input
        type="text"
        value={todo.cantidadMovimiento}
        className={`list ${todo.tipoMovimiento} cantidadMovimiento`}
        onChange={(e) => e.preventDefault}
      />      
    </li>
  );
};

export default TodoItem;

