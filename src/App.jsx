import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import ThemeToggler from './components/ThemeToggler';
import Main from './Main/Main';
import './index.css';

function App() {
  return (
    <div className="bg-[#121212] rounded">
      <Router>
        <Routes>
           <Route  path="/*" element={<>404</>}/>
           <Route  path="/home" element={<><ThemeToggler /><Header /><Main /></>}/>
           <Route  path="/" element={<><ThemeToggler /><Header /><Main /></>}/>git 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
