import React, { useContext } from 'react';
import './login.css';

import logo from '../logovagalu.png';
import '../App.css';

import { Context } from '../Context/AuthContext';

function Main() {

  
  const { authenticated, handleLogin} = useContext(Context);
  console.log(authenticated)

  const handleFormSubmit = e => {
    e.preventDefault();
  }

  const handleImputChangeus = e => {
    var user = e.target.value;
    localStorage.setItem('usuario', user)
    //setSenhainput(user);

  }
  const handleImputChangess = e => {
    var senha = e.target.value;
    localStorage.setItem('senha', senha)
    //setLogininput(senha);
  }
  
  return(
    
    <div className="todoapp stack-large">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Qualquecoisa</h1>
      <form onSubmit={handleFormSubmit}>
        <h4>Username </h4>
        <input
          type="text/javascript"
          id="loginipt"
          className="input input__lg entrada2"
          name="usuario"
          onChange={handleImputChangeus}
          //autoComplete='off'
          //value={values.user}
        />
        <h4>Password </h4>
        <input
          type="password"
          id="senhaipt"
          className="input input__lg entrada"
          name="senha"
          onChange={handleImputChangess}
          autoComplete='off'
          //value={values.password}
        />
        <button type="button" className="btn btn__primary botaoentrar" onClick={handleLogin}>
            Entrar
        </button>
      </form>
    </div>
    
  )
}

export default Main;