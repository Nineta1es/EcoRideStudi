import React, { useState } from 'react';

function Covoiturages() {

    const [depart, setDepart] = useState('');
    const [arrivee, setArrivee] = useState('');
    const [date, setDate] = useState('');


    const [resultats, setResultats] = useState([]);
    const [rechercheFaite, setRechercheFaite] = useState(false);


    const trajets = [
        {
            id: 1,
            conducteur: "Marie",
            depart: "Paris",
            arrivee: "Lyon",
            date: "2025-05-22",
            prix: 25
        },
        {
            id: 2,
            conducteur: "Tom",
            depart: "Paris",
            arrivee: "Lyon",
            date: "2025-05-22",
            prix: 22
        },
        {
            id: 3,
            conducteur: "Sophie",
            depart: "Paris",
            arrivee: "Lyon",
            date: "2025-05-22",
            prix: 28
        }
    ];


    function rechercher() {
        const resultatsFiltre = trajets.filter(trajet => {
            return trajet.depart.toLowerCase().includes(depart.toLowerCase()) &&
                trajet.arrivee.toLowerCase().includes(arrivee.toLowerCase()) &&
                (date === '' || trajet.date === date);
        });

        setResultats(resultatsFiltre);
        setRechercheFaite(true);
    }

    return (
        <div>
            <h2>Covoiturages</h2>

            <div>
                <div>
                    <label>Départ:</label>
                    <input
                        type="text"
                        value={depart}
                        onChange={(e) => setDepart(e.target.value)}
                        placeholder="Ville de départ"
                    />
                </div>

                <div>
                    <label>Arrivée:</label>
                    <input
                        type="text"
                        value={arrivee}
                        onChange={(e) => setArrivee(e.target.value)}
                        placeholder="Ville d'arrivée"
                    />
                </div>

                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <button onClick={rechercher}>Rechercher</button>
            </div>

            {/* résultats */}
            {rechercheFaite && (
                <div>
                    <h3>{resultats.length ? `${resultats.length} trajet(s)` : 'Aucun trajet'}</h3>

                    {resultats.map(t => (
                        <div key={t.id}>
                            <h4>{t.depart} → {t.arrivee}</h4>
                            <p>Date: {t.date} | Conducteur: {t.conducteur} | Prix: {t.prix} €</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Covoiturages;