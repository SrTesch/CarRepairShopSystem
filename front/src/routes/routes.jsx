import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../components/header"
import Footer from '../components/footer';
const Rotas = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Rotas;