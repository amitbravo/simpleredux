import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'

function App(props) {
  const counter = useSelector(state => state)
  console.log('counter',counter)

  return (
    <div className="App">
        <div>Total Counts: {counter}</div>
    </div>
  );
}

export default App;
