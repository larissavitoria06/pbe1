const con = require('../connect/connect');


const create = (req, res) => {
    const { telefone_id, aluno_id, professor_id, numero, tipoenum, } = req.body;

    const query = `INSERT INTO telefone (telefone_id, aluno_id, professor_id, numero, tipoenum,) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

    con.query(query, [telefone_id, aluno_id, professor_id, numero, tipoenum,], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
};


const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result); 
        }
    });
};


const update = (req, res) => {
    const { id } = req.params; 
    const { telefone_id, aluno_id, professor_id, numero, tipoenum, } = req.body;

    const query = `UPDATE telefone SET telefone_id = ?, aluno_id = ?, professor_id = ?, numero = ?, tipoenum = ?,= ? 
    WHERE telefone_id = ?`;

    con.query(query, [telefone_id, aluno_id, professor_id, numero, tipoenum, ], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);  
        }
    });
};


const deletar = (req, res) => {
    const { id } = req.params; 

    const query = 'DELETE FROM telefone WHERE telefone_id = ?';
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






