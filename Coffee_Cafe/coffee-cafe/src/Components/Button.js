import React, { useState } from 'react';

const Button = () => {
  const [content, setContent] = useState('Default Content');

  const handleButtonClick1 = () => {
    setContent('Content for Button 1');
  };

  const handleButtonClick2 = () => {
    setContent('Content for Button 2');
  };

  return (
    <div>
      <h1>{content}</h1>
      <button onClick={handleButtonClick1}>Button 1</button>
      <button onClick={handleButtonClick2}>Button 2</button>
    </div>
  );
}
  export default Button