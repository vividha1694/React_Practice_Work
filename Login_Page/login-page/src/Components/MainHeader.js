import React, { useContext } from 'react'
import styles from '../Styles/MainHeader.module.css'
import Navigation from './Navigation'
import AuthContext from '../Context/auth-context'


function MainHeader(props) {
   
   const authContext = useContext(AuthContext);

  return (
   <AuthContext.Consumer>{(ctx)=>{
    return (
      <header className={styles["main-header"]}>
        <h1>Header</h1>
        {ctx.isLoggedIn && <Navigation/> } {/*if login then draw navigation*/}
    </header>
    )
   }}
    </AuthContext.Consumer>
    
  )
} 

export default MainHeader
