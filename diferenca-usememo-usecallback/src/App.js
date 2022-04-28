import { useCallback, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const Button = ({ ...props }) => {

  useEffect(() => {
    console.log(`BUTTON: RE-RENDER`)
  })

  useEffect(() => {
    console.log(`BUTTON: ON CLICK CHANGED`)
  }, [props.onClick])

  return <button {...props} />
}

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`APP: RE-RENDER-${count}`)
  })

  return (
    <div className="App">
      <h1>useCallback vs useMemo</h1>
      <div>count: {count}</div>
      <Button onClick={useCallback(() => setCount((prev) => prev+1), [])}>Increment</Button>
    </div>
  );
}

export default App;
