import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useEagerConnect, useInactiveListener } from './hooks/useEagerConnect';


function App() {
  const [errorMessage, setErrorMessage] = useState();
  useEagerConnect(setErrorMessage);
  useInactiveListener();

  return (
    <div className="App">
      {
        errorMessage? <div style={{color:"red"}}>{errorMessage}</div>: null
      }
      <Header setErrorMessage={setErrorMessage}/>
      <Home />
    </div>
  );
}

export default App;
