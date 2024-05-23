import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react'

const Onboarding = lazy(() => import('@/pages/Onboarding/Onboarding'))
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'))


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/onboarding" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding/*" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
