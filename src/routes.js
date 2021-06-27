import React, {useContext} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

//import Store from './Store/provider'
import Login from './pages/login.js';
import Logado from './pages/logado.js';
import {Context} from './Context/AuthContext'

function CustomRoute({isPrivate, path, ...rest}){
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

  return <Route {...rest} />;
}

function Routes(){
  return(
    <BrowserRouter>
        <Switch>
          <CustomRoute exact path='/Login'  component={Login}/>
          <CustomRoute isPrivate exact path="/" component={Logado}/>
        </Switch>

    </BrowserRouter>
  )
}

export default Routes;
