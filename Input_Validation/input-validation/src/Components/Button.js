import React from 'react'
import '../Styles/Button.module.css'

function Card(props) {
    
  return (
    <button type='button' className='btn' onClick={props.onClick}>okay, done</button>
  )
}

export default Card;