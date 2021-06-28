import React, { useContext} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

//import Store from './Store/provider'
import Login from './pages/login.js';
import Logado from './pages/logado.js';
import Id from './pages/id';
import {Context} from './Context/AuthContext'

//const ContexoMapa = createContext();

function CustomRoute({isPrivate, path, ...rest}){
  //const [id, setId] = useState(-1);
  //const [nome, setNome] = useState('');
  const {loading, authenticated} = useContext(Context);
  //console.log(path)

  if(loading){
    return <h2>...</h2>
  }

  if(isPrivate && !authenticated){
    return <Redirect to='/Login' />
  }

  if(path==='/Login' && authenticated){
    return <Redirect to='/' />
  }
  //console.log(path)
  if(path.includes('/link')){
    //console.log(path)
    //console.log({...rest})
    var hash = {...rest}.location.pathname;
    
    hash = hash.replace('/link/', '').split('+');
    

    //console.log(hash)
    localStorage.setItem('id',hash[0])
    localStorage.setItem('nome',hash[1])
  }

  return <Route {...rest} />;
}

function Routes(){
  return(
    <BrowserRouter>
        <Switch>
          <CustomRoute exact path='/Login'  component={Login}/>
          <CustomRoute isPrivate exact path="/" component={Logado}/>
          <CustomRoute isPrivate exact path='/id' component={Id}/>
          <CustomRoute isPrivate path='/link' component={Id}/>
        </Switch>

    </BrowserRouter>
  )
}
//export {ContexoMapa};
export default Routes;


