import logo from './logo.svg';
import './App.css';
import { increment, decrement, setvalue  } from './app/counter'
import { useDispatch } from 'react-redux'

function App(props) {
  console.log('props',props)
  const dispatch = useDispatch()

  return (
    <div className="App">

      <button onClick={()=>dispatch(increment)}>Increase</button>

      <button onClick={()=>dispatch(decrement)}>Decrease</button>


      <button onClick={()=>dispatch(setvalue(100))}>Set Value</button>

    </div>
  );
}

export default App;
