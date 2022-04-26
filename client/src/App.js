// DEPENDENCIES
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css';


function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => {
        setMsg(data.message)
      })
  }, []);

  return (
    <Router>
      <div className="App">
        {/* NAVIGATION BAR */}
        <nav>
          <ul>
              <li>
                <a href="/">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a href='/events'>
                  <Link to="/events">Events</Link>
                </a>
              </li>
              <li>
                <a href="/locations">
                  <Link to="/locations">Locations</Link>
                </a>
              </li>
              <li>
                <a href="hobbies">
                  <Link to="/hobbies">Hobbies</Link>
                </a>
              </li>
          </ul>
        </nav>
        
        {/* WELCOME MESSAGE */}
        <h1>{msg}</h1>
      </div>
      
      <div className="display">
          <Routes>
            <Route path="/" />
            <Route path="/events" />
            <Route path="/locations" />
            <Route path="/hobbies" />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
