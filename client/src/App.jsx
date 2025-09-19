import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Seller from './component/Seller';
import ListingPage from './component/ListingPage';
import Login from './component/Login';
import View from './component/View';
import { AuthProvider } from './component/context/AuthContext'; // ✅ Import AuthProvider

const About = () => <div className="p-8"></div>;

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthProvider> {/* ✅ Wrap entire app in AuthProvider */}
      <Router>
        <Navbar onLoginClick={() => setShowLogin(true)} />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/properties" element={<ListingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </Router>
    </AuthProvider>
  );
}

export default App;
