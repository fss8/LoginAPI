import React, { useContext } from 'react';
import '../index.css';

import logo from '../logovagalu.png';
import '../App.css';

import Popup from '../components/popup';

import { Context } from '../Context/AuthContext';

function Main() {
  
  const { handleLogin, buttonPopup, setButtonPopup} = useContext(Context);  
  
  const handleFormSubmit = e => {
    e.preventDefault();
  }

  const handleImputChangeus = e => {
    var user = e.target.value;
    localStorage.setItem('usuario', user)
  }
  const handleImputChangess = e => {
    var senha = e.target.value;
    localStorage.setItem('senha', senha)
  }
  
  return(
    <div className='divgrande'>
    <div className="divisao">
      <div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>Login/Senha Incorreta</h2>
      </Popup>
      </div>
      <div className="todoapp">
        
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form onSubmit={handleFormSubmit}>
        <div className="textologin">Username</div>
        <input
          type="text"
          id="loginipt"
          className="input input__lg entrada"
          name="usuario"
          onChange={handleImputChangeus}
        />
        <div className="textologin">Password</div>
        <input
          type="password"
          id="senhaipt"
          className="input input__lg entrada"
          name="senha"
          onChange={handleImputChangess}
          autoComplete='off'
        />
        <button type="button" className="btn btn__primary botaoentrar" onClick={handleLogin}>
            Entrar
        </button>
      </form>
    </div>
    </div>
    </div>
    
  )
}

export default Main;