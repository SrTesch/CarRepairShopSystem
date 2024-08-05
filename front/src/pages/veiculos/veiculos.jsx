import React from "react";
import styles from './veiculos.module.css'
import Header from "../../components/header";
export default function Veiculos(props){
    const links = [
        { name: "Serviços", url: "/" },
        { name: "Funcionários", url: "/funcs" },
        { name: "Histórico", url: "/historico" }
    ];
    return(
        <div className={styles.VeiculosPage}>
        <Header links={links} title="Veículos"></Header>
        </div>
    )
}