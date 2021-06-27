import React, { createContext, useState, useEffect} from 'react';
//import ReactDOM from 'react-dom';
import api from '../api';

const Context = createContext();

function AuthProvider({children}){
  //const {valores} = useContext(Contextotal)
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
        const token = localStorage.getItem('token');
        //console.log(token)
        if(token){
          //console.log(JSON.parse(token))
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
      //console.log("aaaaa")
      window.location.replace("/");
    }else{
      console.log("Erraaaddo")
    }
  }
  
  function handleLogout(){
    //authorization como undefined
    //setTokenb('')
    localStorage.setItem('usuario', '')
    localStorage.setItem('senha', '') 

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined;
    
    //redirecionar usuário
    //console.log("Saindo")
    window.location.replace("/login");
  }

  function handleBack(){
    //authorization como undefined
    //setTokenb('')
    localStorage.setItem('id', '')

    //redirecionar usuário
    //console.log("Saindo")
    window.location.replace("/");
  }

  return(
    <Context.Provider value={{loading, authenticated, handleLogin, handleLogout, handleBack}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };