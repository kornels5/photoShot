import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="dark container mx-auto">
      <header>
        <h1 className="text-center my-4">PhotoShot</h1>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;
