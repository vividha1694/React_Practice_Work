import React from 'react'
import classes from '../Styles/Navigation.module.css'

function Navigation(props) {
  return (
    <nav className={classes.nav}>
      <ul>
        <li><a href="/">Users</a></li>
        <li><a href="/">Admin</a></li>
        <li><button onClick={props.onLogout}>Logout</button></li>
      </ul>
    </nav>
  )
}

export default Navigation
