import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <h1>Registration Form</h1>
              <UserForm />
            </>
          } />
          <Route path="/success" element={
            <div className="success-page">
              <h1>Thank You!</h1>
              <p>Your data has been processed.</p>
              <a href="/">Go Back</a>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;