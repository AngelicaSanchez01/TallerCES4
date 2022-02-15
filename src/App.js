import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
	const [tipoMovimiento, setTipoMovimiento] = useState("");
	const [nombreMovimiento, setNombreMovimiento] = useState("");
	const [cantidadMovimiento, setCantidadMovimiento] = useState("");
	const [todos, setTodos] = useState([]);
	const [tablaBase, setTablaBase] = useState([]);
	const [edit, setEdit] = useState(null);
    const [saldoInicial, setSaldoInicial] = useState(0);
    const [saldoFinal, setSaldoFinal] = useState(0);
    const [conteo, setConteo] = useState(0)
    const [tipo, setTipo] = useState("");
	const [nombre, setNombre] = useState("");
	return (
		<div className="container">
			<div className="app-wrapper">
				<div>
					<Header 
                        saldoInicial={saldoInicial}
                        saldoFinal={saldoFinal}
                        conteo={conteo}
                    />
				</div>{" "}
				<div>
					<Form
						tipoMovimiento={tipoMovimiento}
						setTipoMovimiento={setTipoMovimiento}
						nombreMovimiento={nombreMovimiento}
						setNombreMovimiento={setNombreMovimiento}
						cantidadMovimiento={cantidadMovimiento}
						setCantidadMovimiento={setCantidadMovimiento}
						todos={todos}
						setTodos={setTodos}
						edit={edit}
						setEdit={setEdit}
						tablaBase={tablaBase}
						setTablaBase={setTablaBase}
                        saldoInicial={saldoInicial}
                        setSaldoInicial={setSaldoInicial}
                        saldoFinal={saldoFinal}
                        setSaldoFinal={setSaldoFinal}
                        conteo={conteo}
                        setConteo={setConteo}
                        nombre={nombre}
                        setNombre={setNombre}
                        tipo={tipo}
                        setTipo={setTipo}
					/>{" "}
				</div>{" "}
				<div>
					<TodoList
						todos={tablaBase}
						setTodos={setTablaBase}
						setEdit={setEdit}
                        conteo={conteo}
                        setConteo={setConteo}
                        saldoFinal={saldoFinal}
                        setSaldoFinal={setSaldoFinal}
                        values={todos}
                        setValues={setTodos}
                        nombre={nombre}
                        setNombre={setNombre}
                        tipo={tipo}
                        setTipo={setTipo}
					/>{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
}

export default App;
