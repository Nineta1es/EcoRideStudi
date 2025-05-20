import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p>
                <a href="mailto:contact@ecoride.com">contact@ecoride.com</a>
            </p>
            <p>
                <a href="/mentions-legales" className="underline">
                    Mentions légales
                </a>
            </p>
        </footer>
    );
}

export default Footer;
