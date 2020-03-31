import React, {Component } from 'react';
import Videojuegos from './imagen/Videojuegos.jpg';
class Video extends Component {
    render(){
        return( 
            <img src={Videojuegos} alt="Videojuegos" id="Video"/>
        );
    }
} 

export default Video;