import React , { useContext, useState, useEffect } from 'react';
import './logado.css';
import api from '../api';

import {Context} from '../Context/AuthContext';

function Main() {
  const { handleLogout } = useContext(Context);
  const [clients, setClients] = useState([])
  useEffect(() => {
    (async () =>{
      const {data } = await api.get('/get_clients');

      setClients(data.clients);
      //console.log(data.clients);
      //console.log(clients)
    })();
  },[])

  return(
    <div>
      <div className='caixa'>
        <h1>Visão Geral</h1>
      </div>
      
        {
          clients.map((user) => (
            
              <div key={user.id} className='caixa' >
                <div className='texto' >
                  <a href={FuncaoClica(user.id, user.name)} style={{ 
                    textDecoration: 'none', 
                    color: 'Black' }} >{user.name} - {user.id}</a>
                </div>
            </div>   
            
            
          ))
        }
      
      <p/>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </div>
    
    
  )
}

function FuncaoClica(id, nome){
  var id = id; var nome = nome;
  return '/link/'+ id + '+' + nome;
}

function handleGO(nome, id){
  localStorage.setItem('nome', nome);
  localStorage.setItem('id', id)
  console.log(localStorage.getItem('id'))
  //window.location.replace("/id")
}

export default Main;
