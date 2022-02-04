const express = require('express')

const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const esquadraoMid = require('../middleware/validarEsquadrao.midd')

const esquadrao = {}

router.post('/', esquadraoMid)
router.put('/', esquadraoMid)

router.get('/', (req, res) => {
    res.json({ esquadrao: Object.values(esquadrao) })
})

router.get('/:id', (req, res) => {
    res.json({esquadrao: esquadrao[req.params.id]})
})

router.post('/', (req, res) => {
    const esquad = req.body
    const idEsquadrao = uuidv4()
    // console.log(aluno)
    esquad.id = idEsquadrao
    esquadrao[idEsquadrao] = esquad
    res.json({ msg: `Esquadrao chamado: ${esquad.nome} foi adicionado com sucesso!` })
})

router.put('/', (req, res) => {
    const id = req.query.id
    if (id && esquadrao[id]) {
        const esquad = req.body
        esquad.id = id
        esquadrao[id] = esquad
        res.json({ msg: `Esquadrao chamado: ${esquad.nome} foi atualizado com sucesso!` })
    } else {
        res.status(400).json({ msg: "Esquadrao não encontrado!" })
    }
})

router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && esquadrao[id]) {
        delete esquadrao[id]
        res.json({ msg: "Esquadrao foi deletado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Esquadrao não encontrado!" })
    }
})

module.exports = router