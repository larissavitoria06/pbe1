const express = require('express');
const router = express.Router();

const clientes = require('./controller/clientes');
const professor = require('./controller/professor');
const telefone = require('./controller/telefone');
const veiculos = require('./controller/veiculos');


const teste = (req, res)=>{
    res.json("API Vitoriakar respondendo com sucesso✨!");
}


router.get('/',teste);
router.post('/clientes',clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes/:id', clientes.update);
router.delete('/clientes/:id', clientes.deletar);


router.get('/',teste);
router.post('/professor', professor.create);
router.get('/professor', professor.read);
router.put('/professor/:id', professor.update);
router.delete('/professor/:id', professor.deletar);


router.get('/',teste);
router.post('/telefone',telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone/:id', telefone.update);
router.delete('/telefone/:id', telefone.deletar);


router.get('/',teste);
router.post('/veiculos', veiculos.create);
router.get('/veiculos', veiculos.read);
router.put('/veiculos/:id', veiculos.update);
router.delete('/veiculos/:id', veiculos.deletar);


module.exports = router;
