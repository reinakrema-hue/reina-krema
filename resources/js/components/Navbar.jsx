import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 50px",
                background: "#5c3b17",
                color: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
        >
            <h2
                style={{
                    margin: 0,
                    color: "#f5d76e",
                    fontWeight: "bold",
                }}
            >
                REINA KREMA
            </h2>

            <div style={{ display: "flex", gap: "30px" }}>
                <Link style={linkStyle} to="/">
                    Accueil
                </Link>

                <Link style={linkStyle} to="/produits">
                    Produits
                </Link>

                <Link style={linkStyle} to="/services">
                    Services
                </Link>

                <Link style={linkStyle} to="/reservation">
                    Réservation
                </Link>
            </div>
        </nav>
    );
}

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
};