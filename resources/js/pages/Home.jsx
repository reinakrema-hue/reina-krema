export default function Home() {
    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h1 style={{ color: "#2c0204", fontSize: "40px" }}>
                Bienvenue chez REINA KREMA
            </h1>

            <h2>Salon de soins capillaires</h2>

            <p style={{ marginTop: "20px", fontSize: "18px" }}>
                Des soins naturels pour révéler la beauté de vos cheveux.
            </p>

            <button
                style={{
                    marginTop: "30px",
                    background: "#193d16",
                    color: "white",
                    border: "none",
                    padding: "15px 30px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}
            >
                Prendre un rendez-vous
            </button>
        </div>
    );
}