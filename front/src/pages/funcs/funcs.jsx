import React, { useState } from "react";
import styles from "./funcs.module.css";
import Table from "../../components/table/table";
import Header from "../../components/header";

const createData = (id, nome, matricula, função) => {
    return { id, nome, matricula, função };
};

export default function Funcs(props) {
    const rowsData = [
        createData("1", "Pedro Tesch", "Mat123", "Programador"),
        createData("2", "Wallerio Barreto", "Mat111", "Chefe"),
        createData("3", "Walmira Azevedo", "Mat222", "Assistente Comercial"),
    ];
    const titleThings = ["ID", "Nome", "Matrícula", "Função"];
    const links = [
        { name: "Serviços", url: "/" },
        { name: "Veículos", url: "/veiculos" },
        { name: "Histórico", url: "/historico" },
    ];

    const [cadastro, setCadastro] = useState(false);
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
        <div className={styles.funcPage}>
            <Header title="Funcionários" links={links} />
            <p className={styles.divBotCadastro}>
                <button onClick={toggleView} className={styles.botãoCadastro}>Novo Funcionário</button>
            </p>
            <Table title={titleThings} data={rowsData} />
            {cadastro && (
                <div className={styles.modal} onClick={closeForm}>
                    <div className={styles.formContainer}>
                        <button className={styles.closeButton} onClick={() => setCadastro(false)}>x</button>
                        <form onSubmit={cadastrar}>
                            <h1>Novo Funcionário</h1>
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
    );
}
