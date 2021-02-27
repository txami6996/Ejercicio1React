import React from 'react';
import './App.css';
import Entrada from './Entrada/Entrada';
import Salida from './Salida/Salida';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      botones: [
        { valor: 0 }

      ],
      entrada1: 0,
      salida: 0,

      otherState: 'some other value'
    }
  }




  multiplica = (a) => {
    var aux2 = this.state.entrada1 * a;
    console.log(aux2)

    this.setState(
      {
        botones: [
          { valor: a },

        ],
        salida: aux2

      })



  }
  getValor = (event) => {

    this.setState(
      {
        entrada1: event.target.value
      })

  }
  render() {
    return (
      <div className="App">
        <h1>Soy una calculadora</h1>
        <p>Introduzca un numero ,pulsar el boton cada vez que quiera realizar la operacion</p>



        <Entrada cambio={this.getValor}/>
        
        <div >
        <button    onClick={() => this.multiplica('37')} >37</button>
        <button  onClick={() => this.multiplica('43')} >43</button>
        </div>
        <Salida entrada={this.state.entrada1} valorBoton={this.state.botones[0].valor}/>
       
        <p>Resultado: <input value={this.state.salida}></input></p>
      </div>
    );

  }
}

export default App;
