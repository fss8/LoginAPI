import React, { useContext} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import login from './pages/login.js';
import logado from './pages/logado.js';
import id from './pages/id';
import {Context} from './Context/AuthContext'


function CustomRoute({isPrivate, path, ...rest}){
  
  const {loading, authenticated} = useContext(Context);

  if(loading){
    return <h2>...</h2>
  }

  if(isPrivate && !authenticated){
    return <Redirect to='/login' />
  }

  if(path==='/login' && authenticated){
    return <Redirect to='/' />
  }
  
  if(path.includes('/link')){
    var hash = {...rest}.location.pathname;
    
    hash = hash.replace('/link/', '').split('+');
    
    localStorage.setItem('id',hash[0])
    localStorage.setItem('nome',hash[1])
  }

  return <Route {...rest} />;
}

function Routes(){
  return(
    <BrowserRouter>
        <Switch>
          <CustomRoute exact path='/login'  component={login}/>
          <CustomRoute isPrivate exact path="/" component={logado}/>
          <CustomRoute isPrivate exact path='/id' component={id}/>
          <CustomRoute isPrivate path='/link' component={id}/>
        </Switch>

    </BrowserRouter>
  )
}
export default Routes;


