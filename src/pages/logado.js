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
  //const abb = localStorage.getItem('token');
  //console.log(tokenb)
  /*var a = TokenAtual()
  console.log(a)*/
  return(
    <div>
      <h1>Texto aaa</h1>
      <ul>
        {
          clients.map((user) => (
            <li key={user.id}>{user.name} - {user.id}</li>
          ))
        }
      </ul>
      
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </div>
    
    
  )
}

export default Main;
