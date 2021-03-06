import React, { createContext, useState, useEffect} from 'react';
import api from '../api';

const Context = createContext();

function AuthProvider({children}){
  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
          api.defaults.headers.Authorization = JSON.parse(token);
          setAuthenticated(true);
        }
        setLoading(false);
      }
        ,[]);
  
  async function handleLogin(){
    var login = localStorage.getItem('usuario')
    if(login === undefined || login === null){
      login = ''
    }
    
    var password = localStorage.getItem('senha')
    if(password === undefined || password === null){
      password = ''
    }
    
    var body = {
      "username": login,
      "password": password   
    };
    const {data: {token}} = await api.post('/login', body)
    
    if(token != null){
      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = token;
      window.location.replace("/");
    }else{
      //Popup Authenticação falhou
      if(buttonPopup === false){
        setButtonPopup(true);
        setTimeout(() => {
          setButtonPopup(false);
        }, 3000);
      }
    }
  }
  
  function handleLogout(){
    localStorage.setItem('usuario', '')
    localStorage.setItem('senha', '') 

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined;
    
    window.location.replace("/login");
  }

  function handleBack(){
    localStorage.setItem('id', '')

    //redirecionar usuário
    window.location.replace("/");
  }

  return(
    <Context.Provider value={{loading, authenticated, buttonPopup, setButtonPopup, handleLogin, handleLogout, handleBack}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };