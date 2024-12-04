DROP DATABASE IF EXISTS vitoriakar;
CREATE DATABASE IF NOT EXISTS vitoriakar;
USE vitoriakar;

CREATE TABLE clientes(
    cliente_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    cpf varchar(11) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    endereco varchar(255) NOT NULL,
    data_nascimento date NOT NULL,
    data_cadastro date NOT NULL   
);

CREATE TABLE professor(
    professor_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    cpf varchar(11) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    endereco varchar(255) NOT NULL,
    data_nascimento date NOT NULL,
    data_cadastro date NOT NULL   
);

CREATE TABLE telefone (
    telefone_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    aluno_id int(10),
    professor_id int(10),
    numero varchar(20) NOT NULL,
    tipo enum('residencial', 'comercial', 'celular') NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES alunos(aluno_id),
    FOREIGN KEY (professor_id) REFERENCES professor(professor_id)
);

CREATE TABLE veiculos (
    veiculos_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    marca_veiculo VARCHAR(252) NOT NULL,
    modelo_veiculo VARCHAR(252) NOT NULL,
    ano_veiculo date NOT NULL,
    fabricacao_veiculo date NOT NULL,
    cliente_id int(10) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES
    ('Cleudet', '56324806537', 'cleudet55@gmail.com', 'Rua tomate galo, 123', '1980-01-01', '2024-01-01');
     ('aline Silva','11923456789', 'aline.silva@example.com', 'Rua fibra katolo, 345', '1995-08-25','2007-09-04');
     ('rosaline Costa', '11934567890','rosaline.costa@example.com','Rua cavalo mitolo,890', '1990-12-10','2018-02-05');

INSERT INTO professor (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES
    ('Prof. João', '12345678900', 'prof.joao@gmail.com', 'Av. Principal, 456','1980-01-01', '2024-01-01');
    ('prof vinicios ', '12345678900', 'prof vinicios.santos@example.com','Rua gelo ganhoto, 982', '1999-09-09', '2014-05-07');
     ('prof fernanda ', '12345678900', 'prof fernanda.lima@example.com', 'Rua frozem mulan, 063', '1948-12-01', '2024-12-04');

INSERT INTO telefone (cliente_id, professor_id, numero, tipo)VALUES
    (1, NULL, '123456789', 'celular'),
    (NULL, 1, '987654321', 'comercial'),
     (1, NULL, '12897342', 'residencial'),
    (NULL, 1, '432106382', 'celular');

INSERT INTO veiculos (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id) VALUES
    ('Fiat', 'Uno', 2015, 2015, 1);
    ('Ford', 'Fiesta', 2017, 2017, 2), 
    ('Honda', 'Civic', 2022, 2022, 3), 
    ('Toyota', 'Corolla', 2021, 2021, 4),
     ('BMW', 'X1', 2019, 2019, 5),
    ('Audi', 'A3', 2023, 2023, 6),
    ('Nissan', 'Kicks', 2021, 2021, 7),