import React from 'react';
import './App.css';
import NewsList from './components/NewsList/NewsList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can keep the header or modify it as needed */}
        <h1>News Reader Application</h1>
      </header>
      <main>
        <NewsList /> {/* Render the NewsList component here */}
      </main>
    </div>
  );
}

export default App;
