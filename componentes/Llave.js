import React, {Component } from 'react';
import llave from './archivos/llave.txt';
class Llave extends Component {
    render(){
        return( 
            <button type="button" class="btn btn-danger">
                        <a href={llave} download="Mi llave pública" class="btn btn-danger">
                                Descargar mi llave pública
                        </a>      
            </button>
        );
    }
} 

export default Llave;