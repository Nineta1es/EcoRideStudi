import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-sky-700 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    <Link to="/" className="hover:text-yellow-300">
                        Ecoride
                    </Link>
                </h1>
                <nav className="space-x-6">
                    <Link to="/" className="hover:text-yellow-300">
                        Accueil
                    </Link>
                    <Link to="/Covoiturages" className="hover:text-yellow-300">
                        Covoiturages
                    </Link>
                    <Link to="/connexion" className="hover:text-yellow-300">
                        Connexion
                    </Link>
                    <Link to="/contact" className="hover:text-yellow-300">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
