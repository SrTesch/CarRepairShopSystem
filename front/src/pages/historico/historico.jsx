import styles from "./historico.module.css"
import React from "react"
import Header from "../../components/header"

export default function Historico (props){
    const links = [
        { name: "Serviços", url: "/" },
        { name: "Funcionários", url:"/funcs" },
        { name: "Veículos", url: "/veiculos" }
    ];
    return (
        <div className={styles.historyPage}>
            <Header title="Histórico" links={links}></Header>
        </div>
    )
}