import React , { useContext, useState, useEffect } from 'react';
import './id.css';
import api from '../../api';

import {Context} from '../../Context/AuthContext';

function Main() {
  const { handleLogout } = useContext(Context);
  const [cliente, setCliente] = useState([])

  useEffect(() => {api
    .get("/get_client_data/3")
    .then((response) => setCliente(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}, []);

  return(
    <div>
      <h1>AHAHAHAH</h1>
      
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </div>
    
    
  )
}

/*function FuncaoClica(id){
  console.log("clicado")
}*/

export default Main;
