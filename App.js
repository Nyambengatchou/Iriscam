import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import ResultsPage from './pages/ResultsPage';
import HistoryPage from './pages/HistoryPage';
import Layout from './components/Layout';

export default function App() {
  const [analysisData, setAnalysisData] = useState(null);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analyse" element={<AnalysisPage setAnalysisData={setAnalysisData} />} />
          <Route path="/resultats" element={
            analysisData ? <ResultsPage data={analysisData} /> : <Navigate to="/analyse" />
          } />
          <Route path="/historique" element={<HistoryPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
