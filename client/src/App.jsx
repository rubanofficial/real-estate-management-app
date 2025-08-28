import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FeaturedProperty from "./components/FeaturedProperty";
import Seller from "./components/Seller";
import ListingPage from "./components/ListingPage";
import Login from "./components/Login";
import View from "./components/View";

const About = () => <div className="p-8">About Page</div>;

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
