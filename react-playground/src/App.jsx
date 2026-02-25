import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Pritam Kumar Gupta</h1>
        <p>Today I'm starting learning React (again) 🚀</p>

        <button onClick={() => setCount(count + 1)}>
          You clicked {count} times
        </button>
      </div>
    </div>
  );
}

export default App;