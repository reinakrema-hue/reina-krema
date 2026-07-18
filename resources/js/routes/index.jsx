import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Produits from "../pages/Produits";
import Services from "../pages/Services";
import Reservation from "../pages/Reservation";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reservation" element={<Reservation />} />
        </Routes>
    );
}