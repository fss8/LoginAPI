import React , { useContext, useState, useEffect } from 'react';
import api from '../api';

import {Context} from '../Context/AuthContext';

function Main() {
  const { handleLogout } = useContext(Context);
  const [clients, setClients] = useState([])
  useEffect(() => {
    (async () =>{
      const {data } = await api.get('/get_clients');

      setClients(data.clients);
    })();
  },[])

  return(
    <div className='system'>
    <div className='sistema'>
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
    </div>
    
    
  )
}

function FuncaoClica(id, nome){
  return '/link/'+ id + '+' + nome;
}

export default Main;
