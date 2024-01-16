import React from "react";
import "../Styles/ErrorModel.css";
import Card from "../Components/Card.js";
import Button from "../Components/Button.js";

function ErrorModel(props) {
  return (
    <Card>
    <div className="alert-popup" onClick={props.onError}>
     
        <header>{props.title}</header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onError} />
        </footer>
     
    </div>
    </Card>
  );
}

export default ErrorModel;
