// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthLayout from './components/Layout/Auth';
import AppLayout from './components/Layout/App/Index';
import ProviderDashboard from './components/Provider/Dashboard/Index';
import CommunityDashboard from './components/Community/Dashboard/Index';
import './App.css';


const App = () => {
  return (
    <Router>
      
        <Routes>
          {/* Auth routes */}
          <Route path="/login" element={
            <AuthLayout>
             <Login />
            </AuthLayout>}
          />
          <Route path="/register" element={
            <AuthLayout>
              <Register />
            </AuthLayout>}
          />

          {/* App routes */}
          <Route path="/" element={
            <AppLayout>
              <ProviderDashboard />
            </AppLayout>}
          />

          <Route path="/community" element={
            <AppLayout>
              <CommunityDashboard />
            </AppLayout>
          }
          />
        </Routes>
      
    </Router>
  );
};

export default App;
