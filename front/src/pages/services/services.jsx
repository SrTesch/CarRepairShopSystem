import React from "react";
import styles from './services.module.css'
import Table from "../../components/table/table";
import Header from "../../components/header";

const createData = (nome, idade, prev, stat) => {
    return { nome, idade, prev, stat }
}

const Services = props => {
    const rowsData = [
        createData("Hyundai HB20", "08/09/2000", "08/09/2024", "Em andamento"),
        createData("Honda Civic", "08/09/2000", "08/09/2024", "Em andamento"),
        createData("Fiat Argo", "08/09/2000", "08/09/2024", "Finalizado")
    ]

    const titleThings = ["Veículo", "Data Início", "Previsão", "Status"]
    const links = [
        { name: "Funcionários", url: "/funcs" },
        { name: "Veículos", url: "/veiculos" },
        { name: "Histórico", url: "/historico" }
    ];
    
    return (
        <div className={styles.servicesPage}>
            <Header title="Serviços" links={links} />
            <Table title={titleThings} data={rowsData} />
        </div>
    )
}

export default Services;