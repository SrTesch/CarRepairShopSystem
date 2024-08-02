import React from "react";
import styles from './services.module.css'

const createData = (nome,idade,prev,stat) =>{
    return {nome,idade,prev,stat}
}

const Services = props =>{
    const rowsData = [
        createData("HB20", "08/09/2000", "08/09/2024", "perfeito"),
        createData("civic", "08/09/2000", "08/09/2024", "bonitinho"),
        createData("teste", "08/09/2000", "08/09/2024", "8)")
    ]
    return(
        <div className={styles.servicesPage}>
            <div className={styles.links}>
                <a href="/funcs" className={`${styles.bn3637} ${styles.bn38}`}>Funcionários</a>
                <a href="/veiculos" className={`${styles.bn3637} ${styles.bn38}`}>Veículos</a>
                <a href="/veiculos" className={`${styles.bn3637} ${styles.bn38}`}>Histórico</a>
            </div>
            <div className={styles.pendantTable}>
                <div className={styles.pendantTitle}>
                    <span className={styles.titleThing}>Veiculo</span>
                    <span className={styles.titleThing}>Data Inicio</span>
                    <span className={styles.titleThing}>Previsão</span>
                    <span className={styles.titleThing}>Status</span>
                </div>
                {rowsData.map((row, index) => (
                    <div key={index} className={styles.row}>
                        <span className={styles.rowThing}>{row.nome}</span>
                        <span className={styles.rowThing}>{row.idade}</span>
                        <span className={styles.rowThing}>{row.prev}</span>
                        <span className={styles.rowThing}>{row.stat}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;