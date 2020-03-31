import React, {Component } from 'react';
import PDF from './archivos/CVIsaac.pdf';
class PDF1 extends Component {
    render(){
        return( 
            <button type="button" class="btn btn-success">
                        <a href={PDF} download="CVIsaac.pdf" class="btn btn-success">
                                Descargar CV
                        </a>      
            </button>
        );
    }
} 

export default PDF1;