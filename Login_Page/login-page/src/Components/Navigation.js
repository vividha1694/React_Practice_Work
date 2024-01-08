import React from 'react'
import classes from '../Styles/Navigation.module.css'
import AuthContext from '../Context/auth-context'
import { useContext } from 'react'

function Navigation(props) {
  const authContext = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        <li><a href="/">Users</a></li>
        <li><a href="/">Admin</a></li>
        <li><button onClick={authContext.onLogout}>Logout</button></li>
      </ul>
    </nav>
  )
}

export default Navigation
