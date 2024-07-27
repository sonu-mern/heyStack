import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landingpage/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AbstractSubmission from './pages/abstract Submission/AbstractSubmission';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/abstractsubmission' element={<AbstractSubmission/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
