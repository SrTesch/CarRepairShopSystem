import React from "react";
import styles from "./funcs.module.css"
import Table from "../../components/table/table";
import Header from "../../components/header"

const createData = (id,nome, matricula,função) =>{
    return {id,nome, matricula,função}
}

export default function Funcs(props){
    const rowsData = [
        createData("1", "Pedro Tesch", "Mat123", "Programador"),
        createData("2", "Wallerio Barreto", "Mat111", "Chefe"),
        createData("3", "Walmira Azevedo", "Mat222", "Assistente Comercial")
    ]
    const titleThings = ["ID", "Nome", "Matrícula", "Função"]
    const links = [
        { name: "Serviços", url: "/" },
        { name: "Veículos", url: "/veiculos" },
        { name: "Histórico", url: "/historico" }
    ];
    return(
        <div className={styles.funcPage}>
            <Header title="Funcionários" links={links}/>
            <Table title={titleThings} data={rowsData}/>
        </div>
    )
}