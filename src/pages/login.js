import React, { useContext, createContext } from 'react';
import './login.css';

import logo from '../logovagalu.png';
import '../App.css';

import { Context } from '../Context/AuthContext';

export const Contextotal = createContext();
/*function inicialState(){
  return {id: 1, user: '', password: '', categoria: "LOGIN", done:false}
}*/

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
        //value={values.user}
      />
      <h4>Password </h4>
      <input
        type="text/javascript"
        id="senhaipt"
        className="input input__lg entrada"
        name="senha"
        onChange={handleImputChangess}
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

/*function FuncaoTal(){
  console.log(document.getElementsByName("usuario").value);
  var usuario = document.getElementsByName("user").value;
  var senha = document.getElementsByName("senha").value;
}

function MudaInputLogin(valor){
  //logininput = userr;
  console.log(userr)
  //setLogininpt()
}

function MudaInputSenha(){
  var senhar = document.getElementsByName("senha")
  console.log(senhar)
  //setLogininpt()
}*/