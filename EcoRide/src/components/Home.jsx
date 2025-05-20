import React from "react";

function Home() {
    return (
        <main className="min-h-screen p-6">
            <section className="text-center mb-8">
                <h2 className="text-2xl font-semibold">Qui sommes-nous ?</h2>
                <p className="mt-4 text-lg">
                    Ecoride est une plateforme de covoiturage dédiée à la mobilité durable.
                </p>
                <img
                    src="https://cdn.prod.website-files.com/6616b463a5789f6228f6b79c/669a8a9a44b0d6e585ec45bf_Les%20bonnes%20pratiques%20du%20covoiturage.png"
                    alt="Image de l'entreprise"
                    className="mt-6 w-full max-w-4xl mx-auto"
                />
            </section>

            {/* Barre de recherche */}
            <section className="text-center mb-8">
                <h2 className="text-2xl font-semibold">Trouver un itinéraire</h2>
                <form className="mt-4">
                    <input
                        type="text"
                        placeholder="Recherchez votre trajet"
                        className="p-2 border border-gray-300 rounded-md w-1/2"
                    />
                    <button
                        type="submit"
                        className="ml-2 bg-blue-600 text-white p-2 rounded-md"
                    >
                        Rechercher
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Home;
