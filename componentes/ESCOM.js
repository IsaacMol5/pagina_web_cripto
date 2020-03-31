import React, {Component } from 'react';
import ESCOM_IMG from './imagen/ESCOM.png';
class ESCOM extends Component {
    render(){
        return( 
            <img src={ESCOM_IMG} alt="Foto de la ESCOM :(" id="ESCOM"/>
        );
    }
} 

export default ESCOM;