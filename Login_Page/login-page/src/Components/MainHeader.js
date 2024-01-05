import React, { useContext } from 'react'
import styles from '../Styles/MainHeader.module.css'
import Navigation from './Navigation'
import { UserContext } from '../App'


function MainHeader() {
 
  const isLoggedIn = useContext(UserContext);
  const onLogout = useContext(UserContext);
  return (
    <header className={styles["main-header"]}>
        <h1>Header</h1>
        {isLoggedIn && <Navigation value={onLogout} /> }
    </header>
  )
}

 
  {/*return (
    <header className={styles["main-header"]}>
        <h1>Header</h1>
        {props.isLoggedIn && <Navigation onLogout={props.onLogout} /> } {/*if login then draw navigation
    </header>
  )
}*/}

export default MainHeader
