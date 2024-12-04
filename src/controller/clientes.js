const con = require('../connect/connect');


const create = (req, res) => {
    const { clientes_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = `INSERT INTO clientes (clientes_id, nome, cpf, email, endereco, data_nascimento, data_cadastro) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

    con.query(query, [clientes_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
};


const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result); 
        }
    });
};


const update = (req, res) => {
    const { id } = req.params; 
    const { clientes_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = `UPDATE clientes SET clientes_id = ?, nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? 
    WHERE idcliente = ?`;

    con.query(query, [clientes_id, nome, cpf, email, endereco, data_nascimento, data_cadastro, id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);  
        }
    });
};


const deletar = (req, res) => {
    const { id } = req.params; 

    const query = 'DELETE FROM clientes WHERE idcliente = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);  
        }
    });
};

module.exports = {
    create,
    read,
    update,
    deletar
};






