import logo from './logo.svg';
import './App.css';
import { increment, decrement  } from './app/counter'
import { useDispatch } from 'react-redux'

function App(props) {
  console.log('props',props)
  const dispatch = useDispatch()

  return (
    <div className="App">

      <button onClick={()=>dispatch(increment)}>Increase</button>

      <button onClick={()=>dispatch(decrement)}>Decrease</button>

    </div>
  );
}

export default App;
