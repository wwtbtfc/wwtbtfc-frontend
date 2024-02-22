import { useState } from 'react';
import logo from '/wwtbtfc.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="WWTBTFC logo" />
      </div>
      <h1>Game Placeholder</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
