import React from "react";

function Contact() {
    return (
        <section className="text-center">
            <h2 className="text-2xl font-semibold">Contactez-nous</h2>
            <p className="mt-4 text-lg">
                Vous pouvez nous joindre par email à{" "}
                <a href="mailto:contact@ecoride.com" className="text-blue-600">
                    contact@ecoride.com
                </a>
            </p>
        </section>
    );
}

export default Contact;

