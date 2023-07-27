import React from 'react';
import './App.css';
import NewsList from './components/NewsList/NewsList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HillTop News Online</h1>
      </header>
      <main>
        <NewsList />
      </main>
    </div>
  );
}

export default App;
