import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './components/layout/Index';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Index />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
