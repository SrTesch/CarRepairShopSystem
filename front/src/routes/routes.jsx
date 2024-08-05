import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../components/header"
import Footer from '../components/footer';
import Services from '../pages/services/services';
import Historico from '../pages/historico/historico';
import Funcs from '../pages/funcs/funcs';
import Veiculos from '../pages/veiculos/veiculos';
const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Services />} />
                <Route path="/historico"  element={<Historico />} />
                <Route path="/funcs" element={<Funcs />} />
                <Route path="/veiculos" element={<Veiculos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Rotas;