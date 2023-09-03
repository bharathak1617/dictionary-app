import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Route
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import WordDetails from './components/WordDetails';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/word/word" element={<WordDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

