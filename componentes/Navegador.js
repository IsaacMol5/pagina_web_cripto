import React, {Component } from 'react';
class Navegador extends Component {
    render(){
        return( 
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <a class="navbar-brand" href="#Nose">Escuela Superior de Cómputo</a>
              <div class="navbar-collapse collapse show" id="navbarColor01" >
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#Inicio">Inicio <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#Autob">Autobiografía</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#Form_aca">Formación académica</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#Intereses">Intereses</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#Hobbies">Hobbies</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#Contacto">Contacto</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#Descargas">Desacargas</a>
                  </li>
                </ul>
              </div>
            </nav>

        );
    }
} 

export default Navegador;

/* 
import React, {Component } from 'react';
class Navegador extends Component {
    state={ }
    render(){
        return( );
    }
} 

export default Navegador;
*/