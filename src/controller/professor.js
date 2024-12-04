const con = require('../connect/connect');  


const create = (req, res) => {
    const { professor_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = `INSERT INTO professores (professor_id, nome, cpf, email, endereco, data_nascimento, data_cadastro) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;  

    con.query(query, [professor_id, nome, cpf, email, endereco, data_nascimento, data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);  
        }
    });
};


const read = (req, res) => {
    con.query('SELECT * FROM professores', (err, result) => {  
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);  
        }
    });
};


const update = (req, res) => {
    const { id } = req.params;  
    const { professor_id, nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;

    const query = `UPDATE professores SET professor_id = ?, nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? 
    WHERE idprofessor = ?`;  

    con.query(query, [professor_id, nome, cpf, email, endereco, data_nascimento, data_cadastro, id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);  
        }
    });
};


const deletar = (req, res) => {
    const { id } = req.params; 

    const query = 'DELETE FROM professores WHERE idprofessor = ?';  // Corrigido o nome da tabela
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
