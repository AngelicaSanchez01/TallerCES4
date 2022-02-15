
const Header = ({
  saldoInicial,
  saldoFinal,
  conteo,
}) => {
  return (
    <div className="header" >
      
      <div className="titulo-saldo">
      <div id="banner" >
      <div class="container-all">
      <img src="https://cdn-icons-png.flaticon.com/512/762/762677.png"  alt="" />
      <h1>Taller 1</h1>
      </div>
      <div className="saldos">
        <table className="tabla">
          <tr>
            <td>Saldo Inicial: </td>
            <td>Saldo Final: </td>
          </tr>
          <tr>
            <td><input
              id="SaldoInicial"
              type="number"
              placeholder="Saldo inicial"
              className="task-input"
              value={saldoInicial}
              readonly
              
            /> </td>
            <td><input
              id="SaldoFinal"
              type="number"
              placeholder="Saldo Final"
              className="task-input"
              value={saldoFinal}
              readonly
              /> 
              </td>
            <td><button 
            id="Count">{conteo}
            </button>  
            </td>
          </tr>
        </table>
          </div>
      </div>
      </div>
    </div>
  );
};


export default Header;
