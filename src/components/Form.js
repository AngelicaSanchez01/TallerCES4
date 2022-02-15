import { useEffect } from "react";
import { v4 as uuid4 } from "uuid";

function Form({
	tipoMovimiento,
	nombreMovimiento,
	cantidadMovimiento,
	setTipoMovimiento,
	setNombreMovimiento,
	setCantidadMovimiento,
	todos,
	setTodos,
	edit,
	setEdit,
	tablaBase,
	setTablaBase,
	saldoInicial,
	setSaldoInicial,
	saldoFinal,
	setSaldoFinal,
	conteo,
	setConteo,
  nombre, 
  setNombre,
  tipo, 
  setTipo,
}) {
	

	const handleInputChange = ({ target }) => {
		setTipoMovimiento(target.value);
	};

	const handleInputChange2 = ({ target }) => {
		setNombreMovimiento(target.value);
	};

	const handleInputChange3 = ({ target }) => {
		setCantidadMovimiento(target.value);
	};

	const handleInputChange4 = ({ target }) => {
		setNombre(target.value);
		filterChanges(target.value, tipo);
	};

	const handleInputChange5 = ({ target }) => {
		setTipo(target.value);
		filterChanges(nombre, target.value);
	};
	const handleResetClick = () =>{
		setTipoMovimiento("")
		setNombreMovimiento("")
		setCantidadMovimiento("")
		setEdit(null)
	};

	const filterChanges = (text, radio) => {
		var result = todos.filter((elemento) => {
			if (
				elemento.tipoMovimiento
					.toString()
					.toLowerCase()
					.includes(radio.toString().toLowerCase())
			) {
				if (
					elemento.nombreMovimiento
						.toString()
						.toLowerCase()
						.includes(text.toString().toLowerCase())
				) {
					return elemento;
				}
			}
		});
		setTablaBase(result);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (tipoMovimiento === "Gasto" && cantidadMovimiento > saldoFinal) {
			alert("El gasto es muy grande");
		} else {
		if (edit) {
			updateTodo(
				edit.id,
				tipoMovimiento,
				nombreMovimiento,
				cantidadMovimiento
			);
			alert("Se ha actualizado correctamente");
		} else {
			const newtodo = {
				id: uuid4(),
				tipoMovimiento: tipoMovimiento,
				nombreMovimiento,
				cantidadMovimiento,
				completed: false,
			};
			if (newtodo.tipoMovimiento === "Ingreso") {
				setSaldoFinal(parseInt(saldoFinal) + parseInt (newtodo.cantidadMovimiento));
			} else {
				setSaldoFinal(parseInt(saldoFinal) - parseInt(newtodo.cantidadMovimiento));
			}
			setConteo(parseInt(conteo + 1));
			setTodos([...todos, newtodo]);
			setTablaBase([...todos, newtodo]);
			setTipoMovimiento("");
			setNombreMovimiento("");
			setCantidadMovimiento("");
			alert("Se ha agregado correctamente");
		}
	}
		setTipo("");
		setNombre("");
	};

	const updateTodo = (
		id,
		tipoMovimiento,
		nombreMovimiento,
		cantidadMovimiento,
		completed
	) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
        var saldo = saldoFinal
				if (todo.tipoMovimiento === "Ingreso") {
					saldo = parseInt(saldo) - parseInt(todo.cantidadMovimiento);
				} else {
					saldo = parseInt(saldo) + parseInt(todo.cantidadMovimiento);
				}

				if (tipoMovimiento === "Ingreso") {
					saldo = parseInt(saldo) + parseInt(cantidadMovimiento);
				} else {
					saldo = parseInt(saldo) - parseInt(cantidadMovimiento);
				}
        setSaldoFinal(saldo)
				return {
					id,
					tipoMovimiento,
					nombreMovimiento,
					cantidadMovimiento,
					completed,
				};
			} else {
				return todo;
			}
		});
		setTodos(newTodos);
		setTablaBase(newTodos);
		setEdit(null);
	};

	useEffect(() => {
		if (edit) {
			setTipoMovimiento(edit.tipoMovimiento);
			setNombreMovimiento(edit.nombreMovimiento);
			setCantidadMovimiento(edit.cantidadMovimiento);
		} else {
			setTipoMovimiento("");
			setNombreMovimiento("");
			setCantidadMovimiento("");
		}
	}, [edit, setTipoMovimiento, setNombreMovimiento, setCantidadMovimiento]);

	window.onload = function saldo() {
		while (true) {
			var saldoIni = prompt("Ingrese el Saldo Inicial");
			if (!isNaN(saldoIni) && saldoIni != null && saldoIni != "") {
				break;
			} else {
				alert("Solo Puede Insertar Numeros");
				continue;
			}
		}
		setSaldoInicial(saldoIni);
		setSaldoFinal(saldoIni);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div class="form">
				<div class="row text-center">
					<div class="col-lg-5 col-form-label">
						<label>Tipo Movimiento:</label>
					</div>
					<div class="col-lg-7">
						<select
							value={tipoMovimiento}
							className="Tipo_Movimiento"
							onChange={handleInputChange}
							required
						>
							<option className="Tipo_Movimiento" value="">
								Seleccione una opcion
							</option>
							<option className="Tipo_Movimiento" value="Ingreso">
								Ingreso
							</option>
							<option className="Tipo_Movimiento" value="Gasto">
								Gasto
							</option>
						</select>
					</div>
				</div>
				<br />
				<div class="row text-center">
					<div class="col-lg-5 col-form-label ">
						<label>Nombre:</label>
					</div>
					<div class="col-lg-7">
						<input
							type="text"
							placeholder="Ingresa el nombre"
							className="task-input"
							value={nombreMovimiento}
							onChange={handleInputChange2}
							required
						/>
					</div>
				</div>
				<br />
				<div class="row text-center">
					<div class="col-lg-5 col-form-label">
						<label>Cantidad: </label>
					</div>
					<div class="col-lg-7">
						<input
							type="number"
							placeholder="Ingresa la cantidad"
							className="task-input"
							value={cantidadMovimiento}
							onChange={handleInputChange3}
							required
						/>
					</div>
				</div>
				<br />
				<div class="row text-center ">
					<div class="col-lg-5">
						<button className="button-cancelar" type="reset" onClick={handleResetClick}>
							{" "}
							Cancelar
						</button>
					</div>
					<br/>
					<div class="col-lg-7">
					<button className="button-add" type="submit">
            			{edit ? "Editar movimiento" : "Agregar movimiento"}
        			</button>
					</div>
				</div>
				<br />
				<div class="col-lg-7">
					<input
						type="text"
						placeholder="Ingresa algun nombre"
						className="task-input"
						value={nombre}
						onChange={handleInputChange4}
					/>
				</div>

				<div class="row mx-auto" onChange={handleInputChange5}>
					<div class="col-lg-3 form-check ">
						<input
							class="form-check-input"
							type="radio"
							name="filtro"
							id="todo"
							value=""
							checked={tipo === ""}
						/>
						<label class="form-check-label" for="todo">
							Todos
						</label>
					</div>
					<div class="row mx-auto">
						<div class="col-lg-3 form-check ">
							<input
								class="form-check-input"
								type="radio"
								name="filtro"
								id="ingreso"
								value="Ingreso"
								checked={tipo === "Ingreso"}
							/>
							<label class="form-check-label" for="ingreso">
								Ingresos
							</label>
						</div>
						<div class="col-lg-3 form-check">
							<input
								class="form-check-input"
								type="radio"
								name="filtro"
								id="gasto"
								value="Gasto"
								checked={tipo === "Gasto"}
							/>
							<label class="form-check-label" for="gasto">
								Gastos
							</label>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default Form;
