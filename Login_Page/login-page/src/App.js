
import { useState, useEffect, useContext} from 'react';
import './App.css';
import MainHeader from './Components/MainHeader';
import Login from './Components/Login';
import Home from './Components/Home'
import AuthContext from './Context/auth-context';


function App() {
  const authContext = useContext(AuthContext);

  return (
    <>
    <MainHeader />
     {!authContext.isLoggedIn && <Login/>}
     {authContext.isLoggedIn && <Home/>}
    </>

  );    
  }


export default App;
