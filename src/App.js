import './App.css';
import Home from './components/Home';
import useEagerConnect from './hooks/useEagerConnect';

function App() {
  useEagerConnect();
  
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
