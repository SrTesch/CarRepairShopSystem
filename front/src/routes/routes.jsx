import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../components/header"
import Footer from '../components/footer';
import Services from '../pages/services/services';
const Rotas = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<Services />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Rotas;