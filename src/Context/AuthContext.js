import React, { createContext, useState, useEffect, useContext } from 'react';
//import ReactDOM from 'react-dom';
import api from '../api';
import { Contextotal } from '../pages/login';

const Context = createContext();

function AuthProvider({children}){
  const {valores} = useContext(Contextotal)
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [senhainput, setSenhainput] = useState('');
  const [logininput, setLogininput] = useState('');

  useEffect(()=>{
        const token = localStorage.getItem('token');
        console.log(token)
        if(token){
          //console.log(JSON.parse(token))
          api.defaults.headers.Authorization = JSON.parse(token);
          setAuthenticated(true);
        }
        setLoading(false);
      }
        ,[]);
  
  async function handleLogin(){
    //var a = document.querySelector("senha");
    //var b = document.getElementsByName("senha").value;
    //console.log(a); console.log(b);
    var body = {
      "username": "projetoselecao",
      "password": "Selec@o1"    
    };
    const {data: {token}} = await api.post('/login', body)
    
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = token;
    console.log("aaaaa")
    //window.location.replace("/");
    //Pegar Token
    /*var retorno = Entra("https://api.elcoma.com.br/api/visits/login")
    if(retorno!=""){
      //setTokenb(retorno)
      localStorage.setItem('token', retorno)
      //console.log(retorno)
      
      setAuthenticated(true);
      //window.location.replace("/");
    }
    console.log(authenticated)*/
  }
  
  function handleLogout(){
    //authorization como undefined
    //setTokenb('')
    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined;
    
    //redirecionar usuário
    console.log("Saindo")
    window.location.replace("/login");
  }

  /*async function TokenAtual() {
    var a = localStorage.getItem('token');
    if(a){
      console.log(a)
      return a;
    }else{
      return '';
    }
  }*/

  return(
    <Context.Provider value={{loading, authenticated, logininput, senhainput, handleLogin, handleLogout}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };


/*function Login(){
  var resultado = Entra("https://api.elcoma.com.br/api/visits/login")
  console.log(resultado)
}

function Entra(yourUrl){
  var retorno = ""
  var resp;
  var request = new XMLHttpRequest();
  //console.log(document.getElementsByName("user").value);
  var usuario = "projetoselecao"
  var senha = "Selec@o1"
  //document.write(user)
  var body = {
    "username": usuario,
    "password": senha    
  };

  //"projetoselecao",
  //"password": "Selec@o1"  
  //let Body = 
  request.open('POST', yourUrl, true);
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  request.onload = function() {
  if (request.readyState === 4 && (request.status >= 200 && request.status < 400)) {
      // Success!
      resp = request.responseText;
      retorno = JSON.parse(resp).token;

      //Entra2("https://api.elcoma.com.br/api/visits/get_clients", retorno)

      //setAuthenticated(true);
      console.log(retorno)
      return retorno;

  } else {
    return retorno;
  }
  };

  request.onerror = function() {
  // There was a connection error of some sort
      console.log("Erro:"+request);
      return retorno;
  };

  //request.send();
}*/