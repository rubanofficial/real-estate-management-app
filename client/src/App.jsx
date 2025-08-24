import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/header';
import Featuredproperty from './component/featuredproperty';
import Seller from './component/seller';
import ListingPage from './component/listingpage';
import Login from './component/login';
import View from './component/view';
const About = () => <div className="p-8"></div>;

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
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
  );
}

export default App;
