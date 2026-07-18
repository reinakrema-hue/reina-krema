import huileHeritage from "../assets/huile heritage.jpeg";
import cremeHeritage from "../assets/creme heritage.jpeg";
import shampoing from "../assets/shampoing.jpeg";
import infusion from "../assets/infusion.jpeg";
import anaya from "../assets/anaya.jpeg";
import soin from "../assets/soin.jpeg";

export default function Produits() {

    const produits = [
        {
            id: 1,
            nom: "Huile Héritage",
            prix: "8 000 FCFA",
            image: huileHeritage,
        },
        {
            id: 2,
            nom: "Crème Héritage",
            prix: "5 000 FCFA",
            image: cremeHeritage,
        },
        {
            id: 3,
            nom: "Shampoing Naturel",
            prix: "4 500 FCFA",
            image: shampoing,
        },
        {
            id: 4,
            nom: "Infusion Détox",
            prix: "3 500 FCFA",
            image: infusion,
        },
        {
            id: 5,
            nom: "Anaya",
            prix: "6 000 FCFA",
            image: anaya,
        },
        {
            id: 6,
            nom: "Soin Capillaire",
            prix: "10 000 FCFA",
            image: soin,
        },
    ];

    return (
        <div
            style={{
                background: "#2c0808",
                minHeight: "100vh",
                padding: "40px",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#dfffcc",
                    marginBottom: "40px",
                }}
            >
                Nos Produits
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "25px",
                }}
            >
                {produits.map((produit) => (
                    <div
                        key={produit.id}
                        style={{
                            background: "white",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 12px rgba(2,44,16,0.12)",
                        }}
                    >
                        <img
                            src={produit.image}
                            alt={produit.nom}
                            style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "cover",
                            }}
                        />

                        <div
                            style={{
                                padding: "20px",
                                textAlign: "center",
                            }}
                        >
                            <h2
                                style={{
                                    color: "#887400",
                                    marginBottom: "15px",
                                }}
                            >
                                {produit.nom}
                            </h2>

                            <p
                                style={{
                                    color: "#d4a017",
                                    fontSize: "20px",
                                    marginBottom: "10px",
                                }}
                            >
                                ★★★★★
                            </p>

                            <h3
                                style={{
                                    color: "#0b7a3e",
                                    marginBottom: "20px",
                                }}
                            >
                                {produit.prix}
                            </h3>

                            <button
                                style={{
                                    background: "#2c0808",
                                    color: "white",
                                    border: "none",
                                    padding: "10px 25px",
                                    borderRadius: "30px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                }}
                            >
                                Voir le produit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}