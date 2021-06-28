import React , { useContext, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import api from '../api';

import {Context} from '../Context/AuthContext';

function Main() {
  const { handleLogout, handleBack } = useContext(Context);
  const [cliente, setCliente] = useState([])

  useEffect(() => {
    (async () =>{
      var id = localStorage.getItem('id')
      var consulta = '/get_client_data/' + id;
      const {data } = await api.get(consulta);
      setCliente(data);
    })();
  },[])

  var variavel = localStorage.getItem('nome');

  const data2 = canvas => {
    //const ctx = canvas.getContext('2d');
    //const g = ctx.createLinearGradient(...);

    return {
        labels: ["10:22","11:22","12:22","13:22","14:22","15:22","16:22","17:22","18:22","19:22","20:22","21:22"],
        datasets: [{
            label: "Acesso à rede WIFI",
            fontSize: 45,
            fontStyle: "bold",
            borderWidth: 3,
            borderColor: 'rgba(255, 5, 5, 0.945)',
            data: cliente.data,
            fill: true
            //backgroundColor: g,
            }],
        };
    }

    const opt2 = () => {
      return {
        title: {
          display: true,
          fontSize: 25,
          label: "Relatório de ee"
        },
        labels: {
          fontStyle: "bold"
        }
      }
    }

  return(
    <div className='system'>
      <div className='sistema'>
        <h1>Tabela</h1>
        <h2>{variavel}</h2>
        <Line data={data2} options={opt2}/>
        <button type="button" onClick={handleBack}>
          Voltar
        </button>
        <p>     </p>
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      
      
      </div>
    </div>
    
    
    
  )
}

export default Main;
