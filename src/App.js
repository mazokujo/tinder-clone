import React, { Component } from 'react'
import './App.css';
import Header from './Header'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    <div className="App">

      {/* header */}
      <Header />

      {/* tindercards */}
      <TinderCards />

      {/* swiperButtons */}
      <SwipeButtons />


    </div>
  );
}


export default App;
