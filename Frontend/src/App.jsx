import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Vite + React Jokes</h1>
      <p>We have {jokes.length} jokes for you!</p>

      <div className="jokes">
        {
          jokes.map((joke) => {
            return (
              <div className="joke-card" key={joke.id}>
                <h3>{joke.setup}</h3>
                <p>{joke.punchline}</p>
              </div>
            );
          })
        }
      </div>

      <footer>
        <p>Made with 💙 using Vite + React</p>
      </footer>
    </div>
  );
}

export default App;
