import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CandidateSearch from './components/CandidateSearch';
import SavedCandidates from './components/SavedCandidates';

export default function App() {
  return (
    <Router>
      <nav className="p-4 flex gap-4 bg-gray-100">
        <Link to="/" className="text-blue-500">Search</Link>
        <Link to="/saved" className="text-blue-500">Saved</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CandidateSearch />} />
        <Route path="/saved" element={<SavedCandidates />} />
      </Routes>
    </Router>
  );
}
