import React, { Component } from 'react';

// import { Container } from './styles';


class Header extends Component  {
 render(){
return (
<>
<nav>
    <div className="nav-wrapper indigo lighten-2">
      <a  className="brand-logo">Loja de Livros</a>
      <ul  className="right hide-on-med-and-down">
        <li><a href="/autores">Autores</a></li>
        <li><a href="/livros">Livros</a></li>
        <li><a href="/precos">Preços</a></li>
      </ul>
    </div>
  </nav>
        



</>
 
 
 
)}
  
}

export default Header;