import React, {Component } from 'react';
import Isaac_img from './imagen/Isaac.jpg';
class Isaac extends Component {
    render(){
        return( 
            <img src={Isaac_img} alt="Foto del autor de esta página :(" id="Yo"/>
        );
    }
} 

export default Isaac;