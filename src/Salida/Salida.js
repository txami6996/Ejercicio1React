import React from 'react';

class Salida extends React.Component {
    render() {
        return (
            <div>
                
                <p >El numero  {this.props.entrada} multiplicado por {this.props.valorBoton} es:</p>
            </div >
        )
    }
};

export default Salida;