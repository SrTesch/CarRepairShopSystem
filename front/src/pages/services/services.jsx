import React, { useState } from "react";
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
    
    const [cadastro,setCadastro] = useState(false);
    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [func, setFunc] = useState("");

    const toggleView = (e) => {
        e.preventDefault();
        setCadastro(!cadastro);
    };

    const closeForm = (e) => {
        if (e.target.className === styles.modal) {
            setCadastro(false);
        }
    };

    const cadastrar = (e) => {
        e.preventDefault();
        console.log("Tentando cadastrar um funcionário novo né?!");
        // lógica para cadastrar
    };
    return (
        <div className={styles.servicesPage}>
            <Header title="Serviços" links={links} />
            <p className={styles.divBotCadastro}>
                <button onClick={toggleView} className={styles.botãoCadastro}>Ordem de Serviço</button>
            </p>
            <Table title={titleThings} data={rowsData} />
            {cadastro && (
                <div className={styles.modal} onClick={closeForm}>
                    <div className={styles.formContainer}>
                        <button className={styles.closeButton} onClick={() => setCadastro(false)}>x</button>
                        <form onSubmit={cadastrar}>
                            <h1>Ordem de Serviço</h1>
                            <input
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                id="nome"
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Matrícula"
                                value={matricula}
                                id="matricula"
                                onChange={(e) => setMatricula(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Função"
                                value={func}
                                id="func"
                                onChange={(e) => setFunc(e.target.value)}
                                required
                            />
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Services;