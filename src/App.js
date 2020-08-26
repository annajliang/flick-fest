import React from 'react';
import SearchMovie from './SearchMovie';
import './App.css';

function App(props) {
  console.log('props', props);
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchMovie />
    </div>
  );
}

export default App;