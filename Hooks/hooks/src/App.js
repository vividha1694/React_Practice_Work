import {useState , useEffect} from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  //const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
  }, []);

  return <h1>{count} times!</h1>
}

  {/*useEffect (() => {
    setCalculation(() => count * 2);
  }, [count]);*/}

  {/*return (// here useEffect hooks is dependent on variable, if count variable updates, effect wiil run again
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((a) => a + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}*/}

export default App;
