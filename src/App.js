import React from 'react';
import {AuthProvider} from './Context/AuthContext'
import Routes from './routes'; 

//import logo from './logovagalu.png';
//import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    
  );
}



export default App;
