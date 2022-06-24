import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import CounterBtn from './CounterBtn'
import Header from './Header'

import { useSelector } from 'react-redux'

function App() {


  return (
    <div className="App">
      <Header />

       <CounterBtn  />
    </div>
  );
}

export default App;
