import React, {Component } from 'react';
import Musica from './imagen/Musica.jpg';
class MUSICA extends Component {
    render(){
        return( 
            <img src={Musica} alt="Musica" id="Musica"/>
        );
    }
} 

export default MUSICA;