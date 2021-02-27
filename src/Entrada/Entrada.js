import React from 'react';

class Entrada extends React.Component {
    render() {
        return (
            <div>
                
                Entrada:<input type="text" onChange={this.props.cambio} value={this.props.name} />
            </div >
        )
    }
};

export default Entrada;