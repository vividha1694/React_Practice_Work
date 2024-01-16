import './App.css';
import React,{useState} from 'react'
import ErrorModel from './Components/ErrorModel';

const App =() => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const handleAddToList = () => {
    if(name.trim() === '' || age.trim() === '') {
      setError({title:'Invalid input',message:'Name and age cannot be blank'});
      return;
    }

    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge < 0) {
      setError({title:'Invalid input',message:'Invalid age: Age must be > 0'});
      return;
    }

    // Clear error if input is valid
    setError('');

    //Add input values to the list
    setList([...list, {name, age: parsedAge}]);

    //Clear input fields
    setName('');
    setAge('');
  };

   
  return (
    
    <div className='main'>

      <div className='container'>
      <label> Name: </label><br></br>
       <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
      <br></br>
      <label> Age: </label><br></br>
        <input type='text' value={age} onChange={(e) => setAge(e.target.value)}></input>
      <br></br>
      <button onClick={handleAddToList}>Add</button>
      </div>
    
     {/* {error && <p className='para'>{error}</p>} */}
      {error && <ErrorModel title={error.title} message={error.message} onError={() => setError('')} />}

     <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
     </div>

     </div>
    
    
  );
}

export default App;
