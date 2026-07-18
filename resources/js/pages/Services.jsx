export default function Services() {

    const services = [
        {
            nom: "Diagnostic capillaire",
            description:
                "Analyse complète du cuir chevelu et des cheveux afin de proposer un soin personnalisé.",
        },
        {
            nom: "Soin profond",
            description:
                "Hydratation intense et réparation de la fibre capillaire avec des produits naturels.",
        },
        {
            nom: "Tresses protectrices",
            description:
                "Coiffures protectrices pour favoriser la pousse et préserver les cheveux.",
        },
        {
            nom: "Reprise de locks",
            description:
                "Entretien professionnel et restructuration des locks pour un résultat propre et durable.",
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
                Nos Services
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "25px",
                }}
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        style={{
                            background: "white",
                            borderRadius: "12px",
                            padding: "25px",
                            boxShadow: "0 4px 12px rgba(2, 44, 16, 0.1)",
                        }}
                    >
                        <h2
                            style={{
                                color: "#887400",
                                marginBottom: "15px",
                            }}
                        >
                            {service.nom}
                        </h2>

                        <p
                            style={{
                                color: "#6e0b0b",
                                lineHeight: "1.7",
                            }}
                        >
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}