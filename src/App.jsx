import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Onboarding from "@/pages/Onboarding/Onboarding";
import Dashboard from "@/pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
