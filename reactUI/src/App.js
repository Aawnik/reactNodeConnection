
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Error connecting to backend.'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Backend says: <strong>{message}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
