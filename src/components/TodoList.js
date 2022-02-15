import TodoItem from "./TodoItem";

const TodoList = ({
	todos,
	setTodos,
	setEdit,
	conteo,
	setConteo,
	saldoFinal,
	setSaldoFinal,
	values,
	setValues,
	nombre,
	setNombre,
	tipo,
	setTipo,
}) => {
	const handleDelete = ({ id }) => {
		var result = values.filter((todo) => {
			if (todo.id !== id) {
				return todo;
			} else {
				if (todo.tipoMovimiento === "Ingreso") {
					setSaldoFinal(
						parseInt(saldoFinal) - parseInt(todo.cantidadMovimiento)
					);
				} else {
					setSaldoFinal(
						parseInt(saldoFinal) + parseInt(todo.cantidadMovimiento)
					);
				}
				setConteo(parseInt(conteo) - 1);
			}
		});
		setTodos(result);
		setValues(result);
		alert("Se ha eliminado correctamente");
    setNombre("");
    setTipo("")
	};

	return (
		<div>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleDelete={handleDelete}
					setEdit={setEdit}
				/>
			))}
		</div>
	);
};

export default TodoList;
