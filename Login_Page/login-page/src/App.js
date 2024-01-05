import { useState, useEffect, createContext} from 'react';
import './App.css';
import MainHeader from './Components/MainHeader';
import Login from './Components/Login';
import Home from './Components/Home'

export const UserContext = createContext();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect =
   (() =>{
   const temp = localStorage.getItem('isLoggedIn');
   console.log(temp);
   if(temp === "1") {
    setIsLoggedIn(true);
  }
},[]);

  const loginHandler = (email,password) => {
    localStorage.setItem('isLoggedIn', "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  

  return (
  <UserContext.Provider value={isLoggedIn}>
    <div>
    <MainHeader onLogout={logoutHandler}/>
     {!isLoggedIn && <Login onLogin={loginHandler} onLogout={logoutHandler}/>}
     {isLoggedIn && <Home/>}
    </div>
    </UserContext.Provider> 

  );    
}

{/*<div>
    <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler}/>
     {!isLoggedIn && <Login onLogin={loginHandler} onLogout={logoutHandler}/>}
     {isLoggedIn && <Home/>}
    </div>
  );    
}*/}


export default App;
