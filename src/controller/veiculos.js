const con = require('../connect/connect');


const create = (req, res) => {
    const { veiculos_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id, } = req.body;

    const query = `INSERT INTO veiculos (veiculos_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

    con.query(query, [veiculos_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
};


const read = (req, res) => {
    con.query('SELECT * FROM veiculos', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result); 
        }
    });
};


const update = (req, res) => {
    const { id } = req.params; 
    const { veiculos_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id, } = req.body;

    const query = `UPDATE veiculos SET veiculos_id = ?, marca_veiculo =modelo_veiculo cano_veiculo?,fabricacao_veiculo ?cliente_id  = ? = ? 
    WHERE idveiculos= ?`;

    con.query(query, [veiculos_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id, id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);  
        }
    });
};


const deletar = (req, res) => {
    const { id } = req.params; 

    const query = 'DELETE FROM veiculos WHERE veiculos_id= ?';
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






