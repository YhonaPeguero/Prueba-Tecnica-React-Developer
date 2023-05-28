import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowDetails from './components/ShowDetails';
import ShowsList from './components/ShowsList';
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowsList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
