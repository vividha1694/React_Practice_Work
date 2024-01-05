import React from 'react'
import '../Styles/Card.css';

function Card(props) {
    const card = 'card' + props.className;
  return (
    <div className={card}>{props.children}</div>
  )
}

export default Card;
