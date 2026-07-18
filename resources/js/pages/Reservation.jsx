import { useState } from "react";
import axios from "axios";

export default function Reservation() {
    const [formData, setFormData] = useState({
        nom: "",
        telephone: "",
        service: "",
        date_rendez_vous: "",
        heure_rendez_vous: "",
        commentaire: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://127.0.0.1:8000/api/reservations",
                formData
            );

            alert("Réservation enregistrée avec succès !");

            setFormData({
                nom: "",
                telephone: "",
                service: "",
                date_rendez_vous: "",
                heure_rendez_vous: "",
                commentaire: "",
            });
        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue.");
        }
    };

    return (
        <div
            style={{
                background: "#3d0202",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
            }}
        >
            <div
                style={{
                    background: "white",
                    width: "500px",
                    padding: "40px",
                    borderRadius: "15px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#0a4208",
                        marginBottom: "30px",
                    }}
                >
                    Prendre un rendez-vous
                </h1>

                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                    }}
                >
                    <input
                        type="text"
                        name="nom"
                        placeholder="Nom complet"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="telephone"
                        placeholder="Téléphone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Choisir un service</option>
                        <option>Diagnostic capillaire</option>
                        <option>Soin profond</option>
                        <option>Tresses protectrices</option>
                        <option>Reprise de locks</option>
                    </select>

                    <input
                        type="date"
                        name="date_rendez_vous"
                        value={formData.date_rendez_vous}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="time"
                        name="heure_rendez_vous"
                        value={formData.heure_rendez_vous}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="commentaire"
                        placeholder="Commentaire (facultatif)"
                        value={formData.commentaire}
                        onChange={handleChange}
                        rows="4"
                    />

                    <button
                        type="submit"
                        style={{
                            background: "#014e07",
                            color: "white",
                            border: "none",
                            padding: "15px",
                            borderRadius: "8px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        Réserver
                    </button>
                </form>
            </div>
        </div>
    );
}