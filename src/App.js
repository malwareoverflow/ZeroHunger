// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthLayout from './components/Layout/Auth';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<AuthLayout>
  <Login />
</AuthLayout>} />
          <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
