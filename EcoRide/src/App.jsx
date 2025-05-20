import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Covoiturages from "./components/Covoiturages";
import Connexion from "./components/Connexion";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/covoiturages" element={<Covoiturages />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
