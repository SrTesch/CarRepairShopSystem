CREATE DATABASE IF NOT EXISTS oficina;
USE oficina;

CREATE TABLE IF NOT EXISTS Funcionario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(255) NOT NULL,
    funcao VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS Veiculo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(255) NOT NULL,
    modelo VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    anoFab INT NOT NULL,
    eixos INT,
    cor VARCHAR(255),
    numFrota INT
);

CREATE TABLE IF NOT EXISTS Servico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idVeiculo INT,
    idFunc INT,
    dataInicio DATE,
    previsao DATE,
    dataFim DATE,
    pecas varchar(255),
    descricao varchar(255),
    valorTotal DECIMAL(10, 2),
    tipo VARCHAR(255),
    status VARCHAR(255),
    FOREIGN KEY (idVeiculo) REFERENCES Veiculo(id),
    FOREIGN KEY (idFunc) REFERENCES Funcionario(id)
);