import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import CounterBtn from './CounterBtn'
import Header from './Header'

import { useSelector } from 'react-redux'

function App() {

  const [data, setData] = useState(3)



  return (
    <div className="App">
      <Header data={data} />

       <CounterBtn func={setData} />
    </div>
  );
}

export default App;
