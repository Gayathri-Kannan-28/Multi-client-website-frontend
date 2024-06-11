import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import VendorDashboard from './components/VendorDashboard';
import EntryPage from './components/EntryPage';
import Login from './components/Login';
import Signup from './components/Signup';
import VendorUpload from './components/VendorUpload';
import './App.css';
import Checkout from "./components/Checkout";

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated, setRedirectPath } = useContext(AuthContext);
  const currentPath = rest.path;

  if (!isAuthenticated) {
    setRedirectPath(currentPath);
    return <Navigate to="/login" />;
  }

  return element;
};

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/vendor-upload" element={<PrivateRoute element={<VendorUpload />} />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
