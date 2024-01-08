import React, { useState,useReducer,useEffect,useContext } from 'react'
import Card from './Card'
import classes from '../Styles/Login.module.css'
import Button from './Button'
import AuthContext from '../Context/auth-context'

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return{value: action.val, isValid: action.val.includes("@")};
  }

  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes("@")};
  }
  return {value: '', isValid: null}
} ;

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return{value: action.val, isValid: action.val.length > 7};
  }

  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.length > 7};
  }
  return {value: '', isValid: null}
} ;

function Login(props) {
  const authContext = useContext(AuthContext);

  const [enteredEmail,setEnteredEamil] = useState("");// to save input
  const [emailIsValid,setEmailIsValid] = useState("");// to check valid

  const [enteredPassword,setEnteredPassword] = useState("");
  const [passwordIsValid,setPasswordIsValid] = useState("");

  const [formIsValid,setFormIsValid] = useState(false);//false for empty form in initial state

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '', isValid: null
  });

  useEffect(()=> {
    console.log('useEffect');

    const timer = setTimeout(() => {
      console.log('Inside Timeout');
      setFormIsValid(
        emailState.isValid && passwordState.isValid);
     }, 500);
    
     return ()=> {
      console.log('CLEAN UP')
      clearTimeout(timer);
     };
    }, [emailState, passwordState]);
  
  
 const emailChangeHandler = (event) => { // to save whatever we type
     //setEnteredEamil(event.target.value);
     dispatchEmail({type:'USER_INPUT',val: event.target.value});
    // console.log("emailChangeHandler", event.target.value);

    setFormIsValid( // for btn able/disable
    event.target.value.includes("@") && passwordState.value.trim().length > 7
    )
 };

 const passwordChangeHandler = (event) => {
  //setEnteredPassword(event.target.value);
  dispatchPassword({type:'USER_INPUT',val: event.target.value});
 // console.log("passwordChangeHandler", event.target.value);

    //  setFormIsValid( // for btn able/disable
    //  emailState.value.includes("@") && event.target.value.trim().length > 7
    //  )
 }
  
 const validateEmailHandler =() => {
  //setEmailIsValid(emailState.value.includes("@"));
  dispatchEmail({type: 'INPUT_BLUR'});
 };
 
 const validatePasswordHandler =() => {
 // console.log("inside validate password handler");// way to check function is calling or not(debugging)
 // const value = enteredPassword.trim().length > 7 ? true : false;
 // console.log("value >>", value);
 // setPasswordIsValid(value);
  dispatchPassword({type: 'INPUT_BLUR'});
 };

 const submitHandler =(event) => {
  event.preventDefault();
  authContext.onLogin(emailState.value, passwordState.value);
 };

  return (
    <Card className={classes.login}>
        <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
            <label htmlFor='email'>E-mail</label>
            <input
              id='email'
              type='email'
              onChange={emailChangeHandler} //to save what we type
              value={emailState.value}// to set value
              onBlur={validateEmailHandler}
              ></input>
              </div>
              <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""}`}>    
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              onChange={passwordChangeHandler}
              value={passwordState.value}
              onBlur={validatePasswordHandler}
              ></input>
            </div>
            <div className={classes.actions}>
              <Button type="submit" className={classes.btn} disabled={!formIsValid}>Login</Button>
            </div> 
        </form>
        
    </Card>
  )
}

export default Login
